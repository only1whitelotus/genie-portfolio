import { useRef, useState } from "react";
import { Expand, X, ArrowLeft, ArrowRight } from "lucide-react";
import { Artwork, imageSource } from "./image";

export function Gallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const opener = useRef<HTMLAnchorElement | null>(null);
  const current = images[active];
  function close() {
    dialog.current?.close();
    document.body.style.overflow = "";
    opener.current?.focus();
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
                event.preventDefault();
                opener.current = event.currentTarget;
                setActive(index);
                dialog.current?.showModal();
                document.body.style.overflow = "hidden";
              }}
              aria-label={`Enlarge: ${image.alt}`}
            >
              <Artwork {...image} sizes="(max-width: 700px) 100vw, 48vw" />
              <span className="gallery-expand">
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
        onCancel={close}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight")
            setActive((active + 1) % images.length);
          if (event.key === "ArrowLeft")
            setActive((active + images.length - 1) % images.length);
        }}
      >
        <div className="lightbox-toolbar">
          <span className="mono">
            {active + 1} / {images.length}
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
        <img src={imageSource(current.src)} alt={current.alt} />
        <div className="lightbox-bottom">
          <button
            className="icon-button"
            aria-label="Previous image"
            onClick={() =>
              setActive((active + images.length - 1) % images.length)
            }
          >
            <ArrowLeft />
          </button>
          <p>{current.alt}</p>
          <button
            className="icon-button"
            aria-label="Next image"
            onClick={() => setActive((active + 1) % images.length)}
          >
            <ArrowRight />
          </button>
        </div>
      </dialog>
    </>
  );
}
