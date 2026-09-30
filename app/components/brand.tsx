import images from "../data/images.json";

export function Brand({
  compactOnMobile = false,
}: {
  compactOnMobile?: boolean;
}) {
  const logo = images["identity/genie-logo.png"];
  const icon = images["identity/genie-icon.png"];

  return (
    <picture
      className={`brand-logo${compactOnMobile ? " brand-logo--compact" : ""}`}
    >
      {compactOnMobile && (
        <source
          media="(max-width: 760px)"
          srcSet={icon.sources.map((s) => `${s.src} ${s.width}w`).join(", ")}
          sizes="46px"
          width={icon.width}
          height={icon.height}
        />
      )}
      <img
        src={logo.sources[1].src}
        srcSet={logo.sources.map((s) => `${s.src} ${s.width}w`).join(", ")}
        sizes="(max-width: 760px) 160px, 176px"
        width={logo.width}
        height={logo.height}
        alt="The Creative Genie"
        decoding="async"
      />
    </picture>
  );
}
