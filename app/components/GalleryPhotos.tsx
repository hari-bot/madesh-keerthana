import { PhotoProvider, PhotoView } from "react-photo-view";
import foto5 from "~/images/foto5.jpg";
import fprint from "~/images/fprint.png";

const GalleryPhotos = () => {
  return (
    <div className="w-full px-1 md:px-4">
      <h4 className="text-3xl font-head font-bold text-center mb-3 pt-10 text-gray-700">
        Madesh & Keerthana
      </h4>
      <p className="text-center font-sans text-gray-500 mb-6">
        Counting down to forever
      </p>

      <img
        src={fprint}
        alt=""
        aria-hidden="true"
        className="mx-auto mb-6 w-24 md:w-28 opacity-70"
      />

      <PhotoProvider>
        <PhotoView src={foto5}>
          <img
            src={foto5}
            alt="Madesh & Keerthana"
            width={1800}
            height={1200}
            loading="lazy"
            className="mx-auto w-full max-w-2xl cursor-pointer rounded-2xl shadow-md"
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};

export default GalleryPhotos;
