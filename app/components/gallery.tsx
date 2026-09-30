import { useEffect, useId, useRef, useState } from "react";
import { Expand, X, ArrowLeft, ArrowRight } from "lucide-react";
import { Artwork, imageSource } from "./image";

export function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const previousOverflow = useRef<string | null>(null);
  const captionId = useId();
  const current = images[active];
  useEffect(
    () => () => {
      if (previousOverflow.current !== null) {
        document.body.style.overflow = previousOverflow.current;
        previousOverflow.current = null;
      }
    },
    [],
  );
  function close() {
    dialog.current?.close();
  }
  function restore() {
    setOpen(false);
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
    opener.current?.focus({ preventScroll: true });
  }
  function move(direction: number) {
    setActive(
      (current) => (current + direction + images.length) % images.length,
    );
  }
  return (
    <>
      <div
        className={`case-gallery ${images.length === 3 ? "gallery-three" : ""}`}
      >
        {images.map((image, index) => (
          <figure key={image.src}>
            <a
              href={imageSource(image.src)}
              onClick={(event) => {
                if (
                  event.button !== 0 ||
                  event.metaKey ||
                  event.ctrlKey ||
                  event.shiftKey ||
                  event.altKey ||
                  !dialog.current?.showModal
                )
                  return;
                event.preventDefault();
                opener.current = event.currentTarget;
                setActive(index);
                setOpen(true);
                previousOverflow.current = document.body.style.overflow;
                dialog.current.showModal();
                document.body.style.overflow = "hidden";
              }}
              aria-label={`Enlarge: ${image.alt}`}
            >
              <Artwork {...image} sizes="(max-width: 700px) 100vw, 48vw" />
              <span className="gallery-expand" aria-hidden="true">
                <Expand size={18} />
              </span>
            </a>
            <figcaption className="mono">
              {String(index + 1).padStart(2, "0")} / {image.alt}
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Project image viewer"
        aria-describedby={captionId}
        onClose={restore}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        <div className="lightbox-toolbar">
          <span className="mono" role="status" aria-atomic="true">
            IMAGE {active + 1} / {images.length}
          </span>
          <span className="lightbox-hint mono" aria-hidden="true">
            {images.length > 1 ? "← → to browse · " : ""}Esc to close
          </span>
          <button
            className="icon-button"
            onClick={close}
            aria-label="Close image viewer"
            autoFocus
          >
            <X />
          </button>
        </div>
        {open && <Artwork {...current} priority sizes="calc(100vw - 40px)" />}
        <div className="lightbox-bottom">
          {images.length > 1 && (
            <button
              className="icon-button"
              aria-label="Previous image"
              onClick={() => move(-1)}
            >
              <ArrowLeft />
            </button>
          )}
          <p id={captionId}>{current.alt}</p>
          {images.length > 1 && (
            <button
              className="icon-button"
              aria-label="Next image"
              onClick={() => move(1)}
            >
              <ArrowRight />
            </button>
          )}
        </div>
      </dialog>
    </>
  );
}
