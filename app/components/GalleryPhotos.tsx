import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";

const photos: IPhoto[] = [
  { src: "https://picsum.photos/seed/wedding1/900/600", width: 3, height: 2, alt: "pic 1" },
  { src: "https://picsum.photos/seed/wedding2/600/750", width: 4, height: 5, alt: "pic 2" },
  { src: "https://picsum.photos/seed/wedding3/900/600", width: 3, height: 2, alt: "pic 3" },
  { src: "https://picsum.photos/seed/wedding4/600/600", width: 1, height: 1, alt: "pic 4" },
  { src: "https://picsum.photos/seed/wedding5/900/600", width: 3, height: 2, alt: "pic 5" },
  { src: "https://picsum.photos/seed/wedding6/600/750", width: 4, height: 5, alt: "pic 6" },
  { src: "https://picsum.photos/seed/wedding7/900/720", width: 5, height: 4, alt: "pic 7" },
  { src: "https://picsum.photos/seed/wedding8/900/600", width: 3, height: 2, alt: "pic 8" },
  { src: "https://picsum.photos/seed/wedding9/600/900", width: 2, height: 3, alt: "pic 9" },
];

let isHydrating = true;

const GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700">
        Gallery
      </h4>
      {isHydrated ? (
        <div className="w-full overflow-auto">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
