export type ContactInput = {
  name: string;
  email: string;
  service: string;
  message: string;
  website?: string;
};
export const services = [
  "Brand & design",
  "Film & motion",
  "Web & product",
  "A bit of everything",
];
export function validateContact(input: unknown): {
  data?: ContactInput;
  error?: string;
} {
  if (!input || typeof input !== "object")
    return { error: "Please fill in the contact form." };
  const raw = input as Record<string, unknown>;
  const fields = ["name", "email", "service", "message", "website"] as const;
  for (const field of fields)
    if (raw[field] !== undefined && typeof raw[field] !== "string")
      return { error: "Please use text in every field." };
  const data = Object.fromEntries(
    fields.map((field) => [field, String(raw[field] || "").trim()]),
  ) as ContactInput;
  if (data.website) return { error: "Please leave the website field empty." };
  if (!data.name || data.name.length > 100)
    return { error: "Please enter a name under 100 characters." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)
    return { error: "Please enter a valid email address." };
  if (!services.includes(data.service))
    return { error: "Please choose a project type." };
  if (data.message.length < 10 || data.message.length > 5000)
    return { error: "Tell me a little more, in 10 to 5,000 characters." };
  return { data };
}
export function mailtoUrl(data: ContactInput) {
  return `mailto:only1whitelotus@gmail.com?subject=${encodeURIComponent(`${data.service} enquiry from ${data.name}`)}&body=${encodeURIComponent(`Hi Akinjide,\n\n${data.message}\n\n${data.name}\n${data.email}`)}`;
}
