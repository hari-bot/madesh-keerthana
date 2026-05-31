import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import type { IPhoto } from "./Gallery";
import foto1 from "~/images/foto1.jpg";
import foto2 from "~/images/foto2.jpg";
import foto3 from "~/images/foto3.jpg";
import foto4 from "~/images/foto4.jpg";
import foto5 from "~/images/foto5.jpg";
import foto6 from "~/images/foto6.jpg";
import foto7 from "~/images/foto7.jpg";

// width/height are the real pixel dimensions of each photo so the gallery
// lays them out at their true aspect ratio (no stretching / squashing).
// `wide: true` makes a photo span the full width on the mobile 2-col grid —
// set on the landscape shots so they read as full-width "hero" rows, while the
// portraits pair up side-by-side. foto2 and foto6 look similar, so they're
// placed far apart (top vs bottom).
const photos: IPhoto[] = [
  {
    src: foto2,
    width: 4096,
    height: 2304,
    alt: "Madesh & Keerthana",
    wide: true,
  },
  { src: foto3, width: 853, height: 1280, alt: "Madesh & Keerthana" },
  { src: foto7, width: 3024, height: 4032, alt: "Madesh & Keerthana" },
  {
    src: foto1,
    width: 2000,
    height: 1333,
    alt: "Madesh & Keerthana",
    wide: true,
  },
  { src: foto4, width: 3000, height: 4000, alt: "Madesh & Keerthana" },
  { src: foto6, width: 2263, height: 2410, alt: "Madesh & Keerthana" },
  {
    src: foto5,
    width: 1800,
    height: 1200,
    alt: "Madesh & Keerthana",
    wide: true,
  },
  { src: foto6, width: 2263, height: 2410, alt: "Madesh & Keerthana" },
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
        <div className="w-full">
          <Gallery photos={photos} />
        </div>
      ) : null}
    </div>
  );
};

export default GalleryPhotos;
