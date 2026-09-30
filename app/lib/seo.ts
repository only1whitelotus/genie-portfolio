export const siteUrl = "https://creativegenie.vercel.app";
export function seo(
  title: string,
  description: string,
  pathname = "/",
  image = "/media/og-studio.png",
) {
  const fullTitle =
    title === "home"
      ? "The Creative Genie — Design, Film & Code"
      : `${title} — The Creative Genie`;
  return [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}${pathname}` },
    { property: "og:image", content: `${siteUrl}${image}` },
    { property: "og:site_name", content: "The Creative Genie" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${siteUrl}${image}` },
    {
      tagName: "link" as const,
      rel: "canonical",
      href: `${siteUrl}${pathname}`,
    },
  ];
}
