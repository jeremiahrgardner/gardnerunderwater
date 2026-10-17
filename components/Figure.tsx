import Image from "next/image";

// A diagram or photo inside a Learn article, with a visible caption.
// Diagrams are SVG files in public/learn/figures and are served as-is.
// The image links to the full-size file so phone readers can zoom in.
export function Figure({
  src,
  alt,
  caption,
  width = 960,
  height = 600,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  if (!src.startsWith("/")) return null;
  return (
    <figure className="learn-figure">
      <a className="learn-figure-media" href={src} title="Open full size">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 640px, 850px"
          unoptimized={src.endsWith(".svg")}
        />
      </a>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
