import { validateContact } from "../app/lib/contact.ts";

type Request = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};
type Response = {
  status: (code: number) => Response;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};
const requests = new Map<string, { count: number; expires: number }>();
export default async function handler(req: Request, res: Response) {
  res.setHeader("Cache-Control", "no-store");
  const enabled = Boolean(
    process.env.RESEND_API_KEY && process.env.CONTACT_FROM,
  );
  if (req.method === "GET") return res.status(200).json({ enabled });
  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "Method not allowed." });
  }
  if (!enabled)
    return res
      .status(503)
      .json({ error: "Please use the email link to get in touch." });
  const origin =
    typeof req.headers.origin === "string" ? req.headers.origin : "";
  let sameOrigin = false;
  try {
    sameOrigin = new URL(origin).host === req.headers.host;
  } catch {
    /* Invalid origin. */
  }
  if (!sameOrigin)
    return res
      .status(403)
      .json({ error: "Please send your message from the contact page." });
  if (!String(req.headers["content-type"]).startsWith("application/json"))
    return res.status(415).json({ error: "Please use the contact form." });
  if (JSON.stringify(req.body || "").length > 15000)
    return res.status(413).json({ error: "Your message is too long." });
  const result = validateContact(req.body);
  if (!result.data) return res.status(400).json({ error: result.error });
  // Best-effort, instance-local throttling. Use a shared store for high-traffic deployments.
  const ip = String(req.headers["x-forwarded-for"] || "unknown")
    .split(",")[0]
    .trim();
  const now = Date.now();
  for (const [key, limit] of requests)
    if (limit.expires < now) requests.delete(key);
  const limit = requests.get(ip) || { count: 0, expires: now + 600000 };
  if (limit.count >= 3) {
    res.setHeader("Retry-After", "600");
    return res
      .status(429)
      .json({
        error:
          "Please wait a few minutes before sending another message, or email me directly.",
      });
  }
  requests.set(ip, { ...limit, count: limit.count + 1 });
  const { name, email, service, message } = result.data;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10000),
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM,
        to: ["only1whitelotus@gmail.com"],
        reply_to: email,
        subject: `Portfolio enquiry: ${service}`,
        text: `From: ${name}\nEmail: ${email}\nProject: ${service}\n\n${message}`,
      }),
    });
    if (!response.ok) throw new Error("Delivery failed");
    return res.status(200).json({ sent: true });
  } catch {
    return res
      .status(502)
      .json({
        error:
          "Your message couldn’t be sent. Please try again or email me directly.",
      });
  }
}
