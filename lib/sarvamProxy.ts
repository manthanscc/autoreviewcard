export interface SarvamProxyRequest {
  prompt: string;
}

export interface SarvamProxySuccess {
  text: string;
}

export interface SarvamProxyError {
  error: string;
}

const MAX_PROMPT_LENGTH = 4000;
const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now >= entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) {
    return true;
  }

  entry.count += 1;
  return false;
}

function getAllowedOrigins(): string[] {
  const fromEnv = process.env.ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  if (fromEnv?.length) {
    return fromEnv;
  }

  const defaults = [
    "http://localhost:5173",
    "http://localhost:4173",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:4173",
  ];

  if (process.env.VERCEL_URL) {
    defaults.push(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.APP_URL) {
    defaults.push(process.env.APP_URL.replace(/\/$/, ""));
  }

  return defaults;
}

function isAllowedOrigin(origin: string | undefined, referer: string | undefined): boolean {
  const allowedOrigins = getAllowedOrigins();

  if (origin && allowedOrigins.includes(origin)) {
    return true;
  }

  if (referer) {
    return allowedOrigins.some((allowed) => referer.startsWith(`${allowed}/`) || referer === allowed);
  }

  // Same-origin fetch from some browsers may omit Origin on POST.
  return process.env.NODE_ENV !== "production";
}

async function callSarvamApi(prompt: string, apiKey: string): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch("https://api.sarvam.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-subscription-key": apiKey,
      },
      body: JSON.stringify({
        model: "sarvam-105b",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 120,
        reasoning_effort: null,
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Sarvam API error: ${response.status} — ${errorBody}`);
    }

    const data = (await response.json()) as {
      choices?: Array<{
        message?: {
          content?: string;
          reasoning_content?: string;
        };
      }>;
    };
    const message = data.choices?.[0]?.message;
    const text = message?.content?.trim() || message?.reasoning_content?.trim();

    if (!text) {
      throw new Error("Sarvam API returned empty content");
    }

    return text;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Sarvam API timed out after 30 seconds");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function handleSarvamProxy(input: {
  method: string;
  body: unknown;
  origin?: string;
  referer?: string;
  ip?: string;
}): Promise<{ status: number; body: SarvamProxySuccess | SarvamProxyError }> {
  if (input.method !== "POST") {
    return { status: 405, body: { error: "Method not allowed" } };
  }

  if (!isAllowedOrigin(input.origin, input.referer)) {
    return { status: 403, body: { error: "Forbidden" } };
  }

  const apiKey = process.env.SARVAM_API_KEY;
  if (!apiKey) {
    return { status: 503, body: { error: "AI service is not configured" } };
  }

  const clientIp = input.ip || "unknown";
  if (isRateLimited(clientIp)) {
    return { status: 429, body: { error: "Too many requests. Please try again later." } };
  }

  const payload = input.body as SarvamProxyRequest;
  const prompt = typeof payload?.prompt === "string" ? payload.prompt.trim() : "";

  if (!prompt) {
    return { status: 400, body: { error: "Prompt is required" } };
  }

  if (prompt.length > MAX_PROMPT_LENGTH) {
    return { status: 400, body: { error: "Prompt is too long" } };
  }

  try {
    const text = await callSarvamApi(prompt, apiKey);
    return { status: 200, body: { text } };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate content";
    return { status: 502, body: { error: message } };
  }
}
