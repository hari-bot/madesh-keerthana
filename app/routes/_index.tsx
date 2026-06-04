import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import WelcomeModal from "~/components/WelcomeModal";
import { indexAction, indexLoader } from "~/controls";
import type { LoaderDataType } from "~/controls";
import { useMediaQuery } from "react-responsive";
import heroBg from "~/images/hero-bg.jpg";
import SectionWrapper from "~/components/Utils/SectionWrapper";
import BrideAndGroom from "~/components/BrideAndGroom";
import Countdown from "~/components/Countdown";
import Agendas from "~/components/Agendas";
import LocationMap from "~/components/LocationMap";
import MusicPlayer from "~/components/MusicPlayer";
import FallingPetals from "~/components/FallingPetals";
const ogimage = "/ogimage.png";
import GalleryPhotos from "~/components/GalleryPhotos";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "Madesh 🤍 Keerthana - 23.06.2026",
    },
    {
      description:
        "Tuesday, 23 June 2026 — Join us to celebrate our special day",
    },
    {
      "og:image": ogimage,
    },
    {
      "og:image:type": "image/jpeg",
    },
    {
      "og:site_name": "madesh-keerthana",
    },
    { "og:title": "Wedding Invitation - Madesh & Keerthana" },
    {
      "og:description":
        "Tuesday, 23 June 2026 — Join us to celebrate our special day",
    },
    { "og:type": "website" },

    { "twitter:image": ogimage },
    { "twitter:card": "summary_large_image" },
    {
      "twitter:description":
        "Tuesday, 23 June 2026 — Join us to celebrate our special day",
    },
  ];
};

export const loader = indexLoader;
export const action = indexAction;

export default function Index() {
  useLoaderData<LoaderDataType>();
  const isSmallScreen = useMediaQuery({ query: `(max-width: 768px)` });

  const [openWelcome, setOpenWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const onCloseWelcomeModal = () => {
    setOpenWelcome(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);

  const thisYear = new Date().getFullYear();

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="bg-background-2"
    >
      <WelcomeModal isOpen={openWelcome} onClose={onCloseWelcomeModal} />

      {!openWelcome && <FallingPetals />}

      <div
        className="relative z-10 flex justify-center items-center h-screen md:h-[750px] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* OPTION 1: white text + soft dark glow/halo + pink offset shadow */}
        <div className="-mt-40 md:mt-0">
          <h4
            className="text-center font-amsterdam text-3xl sm:text-4xl md:text-6xl mb-4 text-white leading-tight"
            style={{
              textShadow:
                "3px 3px 1px #CE7BB0, 0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.65)",
            }}
          >
            Madesh & Keerthana
          </h4>
          <div
            className="text-center font-black font-sans text-md text-white italic border-t-2 border-[#CE7BB0] pt-3"
            style={{
              textShadow: "2px 2px 1px #CE7BB0, 0 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            24.06.2026
          </div>
        </div>
      </div>

      {/* <SectionWrapper className="bg-background">
        <BrideAndGroom />
      </SectionWrapper> */}

      <div className="relative z-10">
        <SectionWrapper className="mb-20 pt-20">
          <Agendas />
        </SectionWrapper>

        <div className="mb-20">
          <LocationMap />
        </div>

        <SectionWrapper className="mb-40 pt-5">
          <Countdown />
        </SectionWrapper>

        <SectionWrapper className="pt-4 pb-24">
          <GalleryPhotos />
        </SectionWrapper>
      </div>

      <div
        className="py-24 relative z-10 text-center font-sans"
        style={{ backgroundColor: "#EDD9E5", color: "#555" }}
      >
        © {thisYear} <span className="font-semibold">Madesh & Keerthana</span>
      </div>

      <MusicPlayer play={!openWelcome} hideButton={openWelcome} />
    </div>
  );
}
