"use client";

import { useState } from "react";
import Image from "next/image";

type Photo = {
  src: string;
  alt?: string;
  position?: string;
};

export function ZoomableGallery({
  photos,
  className,
  itemClassName,
}: {
  photos: Photo[];
  className?: string;
  itemClassName?: string;
}) {
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const selected = photos.find((p) => p.src === selectedSrc);

  return (
    <>
      <div className={className}>
        {photos.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelectedSrc(photo.src)}
            className={`relative cursor-zoom-in overflow-hidden ${itemClassName ?? "aspect-[16/9]"}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt ?? ""}
              fill
              className="object-cover"
              style={photo.position ? { objectPosition: photo.position } : undefined}
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setSelectedSrc(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedSrc(null)}
            className="absolute top-6 right-6 cursor-pointer font-sans text-sm text-white/70 transition-colors hover:text-white"
            aria-label="Close"
          >
            Close
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.src}
            alt={selected.alt ?? ""}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}
