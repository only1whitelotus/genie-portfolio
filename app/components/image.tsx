import type { CSSProperties } from "react";
import images from "../data/images.json";

type ImageInfo = {
  width: number;
  height: number;
  sources: { src: string; width: number }[];
};
export function imageSource(src: string, maxWidth = 1600) {
  const info = (images as Record<string, ImageInfo>)[src];
  return (
    info?.sources.find((s) => s.width >= maxWidth)?.src ||
    info?.sources.at(-1)?.src ||
    `/${src}`
  );
}
export function Artwork({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 100vw, 60vw",
  style,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
}) {
  const info = (images as Record<string, ImageInfo>)[src];
  return (
    <img
      src={imageSource(src, 960)}
      srcSet={info?.sources.map((s) => `${s.src} ${s.width}w`).join(", ")}
      sizes={sizes}
      width={info?.width}
      height={info?.height}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      style={style}
    />
  );
}
