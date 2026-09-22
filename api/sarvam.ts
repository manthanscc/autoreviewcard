import type { VercelRequest, VercelResponse } from "@vercel/node";

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
    return allowedOrigins.some(
      (allowed) => referer.startsWith(`${allowed}/`) || referer === allowed,
    );
  }

  return process.env.NODE_ENV !== "production";
}

function getClientIp(forwardedFor: string | string[] | undefined): string {
  if (!forwardedFor) return "unknown";
  const value = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  return value.split(",")[0]?.trim() || "unknown";
}

function parseBody(body: unknown): Record<string, unknown> {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as Record<string, unknown>;
    } catch {
      return {};
    }
  }

  if (body && typeof body === "object") {
    return body as Record<string, unknown>;
  }

  return {};
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
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Sarvam API timed out after 30 seconds");
    }
    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    if (!isAllowedOrigin(req.headers.origin, req.headers.referer)) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const apiKey = process.env.SARVAM_API_KEY;
    if (!apiKey) {
      return res.status(503).json({ error: "AI service is not configured" });
    }

    const clientIp = getClientIp(req.headers["x-forwarded-for"]);
    if (isRateLimited(clientIp)) {
      return res.status(429).json({ error: "Too many requests. Please try again later." });
    }

    const payload = parseBody(req.body);
    const prompt = typeof payload.prompt === "string" ? payload.prompt.trim() : "";

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    if (prompt.length > MAX_PROMPT_LENGTH) {
      return res.status(400).json({ error: "Prompt is too long" });
    }

    const text = await callSarvamApi(prompt, apiKey);
    return res.status(200).json({ text });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate content";
    return res.status(502).json({ error: message });
  }
}
