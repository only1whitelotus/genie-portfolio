import test from "node:test";
import assert from "node:assert/strict";
import { validateContact, mailtoUrl } from "../app/lib/contact.ts";
import handler from "../api/contact.ts";
const valid = {
  name: "Example Name",
  email: "example@example.com",
  service: "Web & product",
  message: "A useful project description.",
};
test("contact validation rejects malformed, oversized and bot submissions", () => {
  for (const input of [
    null,
    { ...valid, name: "" },
    { ...valid, email: "invalid" },
    { ...valid, message: "short" },
    { ...valid, message: "x".repeat(5001) },
    { ...valid, service: "unknown" },
    { ...valid, website: "bot.example" },
    { ...valid, email: ["a"] },
  ])
    assert.ok(validateContact(input).error);
  assert.deepEqual(validateContact(valid).data, { ...valid, website: "" });
});
test("email fallback encodes visitor text as data, not mail headers", () => {
  const url = mailtoUrl({
    ...valid,
    message: "hello & world?\nNew line",
    name: "A & B",
  });
  assert.ok(url.startsWith("mailto:only1whitelotus@gmail.com?"));
  const params = new URLSearchParams(url.split("?")[1]);
  assert.equal(params.size, 2);
  assert.ok(params.get("body")?.includes("hello & world?\nNew line"));
});
test("unconfigured endpoint never reports that a message was sent", async () => {
  const previous = process.env.RESEND_API_KEY;
  delete process.env.RESEND_API_KEY;
  let status = 0;
  let body: unknown;
  const response = {
    status(code: number) {
      status = code;
      return this;
    },
    json(value: unknown) {
      body = value;
    },
    setHeader() {},
  };
  try {
    await handler({ method: "GET", headers: {} }, response);
    assert.equal(status, 200);
    assert.deepEqual(body, { enabled: false });
    await handler({ method: "POST", headers: {}, body: valid }, response);
    assert.equal(status, 503);
    assert.ok((body as unknown as { error: string }).error);
  } finally {
    if (previous !== undefined) process.env.RESEND_API_KEY = previous;
  }
});
