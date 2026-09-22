import type { VercelRequest, VercelResponse } from "@vercel/node";
import { handleSarvamProxy } from "../lib/sarvamProxy";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const result = await handleSarvamProxy({
    method: req.method || "GET",
    body: req.body,
    origin: req.headers.origin,
    referer: req.headers.referer,
    ip: getClientIp(req.headers["x-forwarded-for"]),
  });

  return res.status(result.status).json(result.body);
}

function getClientIp(forwardedFor: string | string[] | undefined): string | undefined {
  if (!forwardedFor) return undefined;
  const value = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  return value.split(",")[0]?.trim();
}
