import { PhotoProvider, PhotoView } from "react-photo-view";

export interface IPhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  /* span both columns (full width) on the mobile 2-col grid */
  wide?: boolean;
}

interface GalleryProps {
  photos: IPhoto[];
}

/*
 * Mobile: a 2-column masonry grid. Wide photos span both columns (full width)
 * while smaller ones sit side-by-side; grid-flow-dense backfills the gaps so
 * there's no ragged empty space. Desktop (md+) falls back to a 3-column CSS
 * columns masonry. Every image keeps its NATURAL aspect ratio (no cropping),
 * and overflow-hidden keeps the hover zoom inside its frame (no scrollbar).
 */
const Gallery = ({ photos }: GalleryProps) => {
  return (
    <PhotoProvider>
      <div className="grid grid-flow-dense grid-cols-2 gap-2 md:block md:columns-3 md:gap-3">
        {photos.map((photo, index) => (
          <PhotoView key={index} src={photo.src}>
            <div
              className={`mb-2 overflow-hidden rounded-lg shadow-sm md:mb-3 ${
                photo.wide ? "col-span-2" : ""
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className="w-full cursor-pointer transition duration-300 hover:scale-105"
              />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
