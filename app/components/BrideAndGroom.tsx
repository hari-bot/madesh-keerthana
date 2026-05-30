import TextWithLine from "./Utils/TextWithLine";

const BRIDE_IMG = "bride.jpg";
const GROOM_IMG = "https://picsum.photos/seed/groom-madesh/400/400";

const BrideAndGroom = () => {
  return (
    <div className="pt-20 pb-4">
      <h3 className="text-3xl text-center font-sans font-bold text-gray-700 mb-6">
        The Happy Couple
      </h3>
      <div className="w-full flex flex-wrap pb-20">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col h-full items-center py-14 sm:px-8 lg:p-20 text-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src={GROOM_IMG}
                alt="the groom"
                className="w-48 h-48 rounded-full mb-8 object-cover"
              />
              <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
                Madesh
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <TextWithLine>The Groom</TextWithLine>
              </div>
              <p className="font-sans text-gray-500 leading-6">
                A man of many talents — mostly charming everyone around him. He
                had Keerthana at hello.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          <div className="flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center">
            <img
              src={BRIDE_IMG}
              alt="the bride"
              className="w-48 h-48 rounded-full mb-8 object-cover"
            />
            <h3 className="text-5xl font-medium font-head mb-4 text-gray-800">
              Keerthana
            </h3>
            <div className="mb-4">
              <TextWithLine>The Bride</TextWithLine>
            </div>
            <p className="font-sans text-gray-500 leading-6">
              A radiant soul with an infectious laugh, a lover of good food and
              great company. She said yes, and the rest is history.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
