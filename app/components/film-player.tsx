import { useEffect, useRef, useState } from "react";
import { imageSource } from "./image";

export function FilmPlayer({
  file,
  poster,
  label,
}: {
  file: string;
  poster: string;
  label: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const element = video.current;
    const pause = () => {
      if (document.hidden) element?.pause();
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) element?.pause();
      },
      { threshold: 0.05 },
    );
    if (element) observer.observe(element);
    document.addEventListener("visibilitychange", pause);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", pause);
      element?.pause();
    };
  }, []);
  const source = `/media/${file}.mp4`;
  return (
    <div className="film-player">
      <video
        ref={video}
        controls
        playsInline
        preload="none"
        poster={imageSource(poster)}
        aria-label={label}
        width={1280}
        height={file === "reckless-era" ? 914 : 720}
        onError={() => setFailed(true)}
      >
        <source src={source} type="video/mp4" onError={() => setFailed(true)} />
        <p>
          Your browser cannot play this film.{" "}
          <a href={source}>Open the video file</a>.
        </p>
      </video>
      {failed && (
        <p className="playback-error" role="status">
          This film couldn’t load.{" "}
          <a href={source}>Try opening the video file directly.</a>
        </p>
      )}
    </div>
  );
}
