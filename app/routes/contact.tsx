import { useEffect, useState } from "react";
import { ArrowUpRight, MoveRight, Check } from "lucide-react";
import { contact, socialLinks } from "../data/content";
import { mailtoUrl, services, validateContact } from "../lib/contact";
import { seo } from "../lib/seo";

export const meta = () =>
  seo(
    "Let’s make it happen",
    "Have a brand, film or digital product in mind? Start a conversation with Akinola Akinjide, The Creative Genie.",
    "/contact",
  );
export default function Contact() {
  const [delivery, setDelivery] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "draft" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    void fetch("/api/contact", { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setDelivery(data?.enabled === true))
      .catch(() => {});
    return () => controller.abort();
  }, []);
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = validateContact(Object.fromEntries(new FormData(form)));
    if (!result.data) {
      setStatus("error");
      setFeedback(result.error || "Please check the form.");
      return;
    }
    if (!delivery) {
      window.location.href = mailtoUrl(result.data);
      setStatus("draft");
      setFeedback(
        "Your email app should open with a draft. Review it and press Send there. If it didn’t open, use the email address on this page.",
      );
      return;
    }
    setStatus("sending");
    setFeedback("Sending your message…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(15000),
      });
      const body = await response.json();
      if (!response.ok)
        throw new Error(
          body.error ||
            "Your message couldn’t be sent. Please try again or email me directly.",
        );
      setStatus("sent");
      setFeedback("Your message is on its way. Thanks for getting in touch.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "The connection timed out. Please email me directly, or try again.",
      );
    }
  }
  return (
    <main id="main" className="contact-page section-pad">
      <div className="contact-intro">
        <p className="eyebrow">A GOOD PLACE TO START</p>
        <h1>
          What are
          <br />
          we <em>making?</em>
        </h1>
        <p>
          Tell me what you have in mind.
          <br />A clear brief, a loose idea, a first hello.
        </p>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}
          <ArrowUpRight size={20} />
        </a>
        <div className="contact-socials">
          {socialLinks.slice(0, 3).map((s) => (
            <a href={s.href} key={s.label} target="_blank" rel="noreferrer">
              {s.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
      <form className="contact-form" onSubmit={submit}>
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            placeholder="What should I call you?"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength={254}
          />
        </label>
        <fieldset>
          <legend>What do you have in mind?</legend>
          <div className="service-options">
            {services.map((service, i) => (
              <label key={service}>
                <input
                  type="radio"
                  name="service"
                  value={service}
                  defaultChecked={i === 0}
                  required
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </fieldset>
        <label>
          A little about the project
          <textarea
            name="message"
            placeholder="The idea, the ambition, the timing…"
            required
            minLength={10}
            maxLength={5000}
            rows={4}
          />
        </label>
        <label className="honeypot" aria-hidden="true">
          Leave this empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
        <button
          className="button"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending…"
            : delivery
              ? "Send your message"
              : "Compose email"}
          {status === "sent" ? <Check size={20} /> : <MoveRight size={20} />}
        </button>
        <p className="form-note">
          {delivery
            ? "Your details are only used to respond to your enquiry."
            : "Opens your email app. Review the draft and send it from there."}
        </p>
        <noscript>
          <style>{`.contact-form { display: none; }`}</style>
        </noscript>
        <p
          className={`form-feedback ${status === "error" ? "form-error" : ""}`}
          role="status"
          aria-live="polite"
        >
          {feedback}
        </p>
      </form>
    </main>
  );
}
