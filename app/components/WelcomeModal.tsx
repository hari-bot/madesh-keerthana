import { Fragment } from "react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderDataType } from "~/controls";
import TextWithLine from "./Utils/TextWithLine";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  const { remark: recipient } = useLoaderData<LoaderDataType>();

  return (
    <div
      className={
        "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" +
        (!isOpen ? " -translate-y-full" : "")
      }
    >
      <div className="bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border">
        <div className="flex flex-col items-center p-5 my-auto w-full md:w-[500]">
          <h5 className="text-center font-medium font-sans text-xl md:text-2xl mb-8 text-gray-500">
            Wedding Invitation
          </h5>
          <h4 className="text-center font-amsterdam text-3xl sm:text-4xl md:text-5xl mb-10 text-gray-800" style={{ lineHeight: "1.3" }}>
            Madesh & Keerthana
          </h4>

          <div className="w-[350px] mb-12">
            {!recipient ? (
              <div>
                <div className="mb-5">
                  <TextWithLine>You're Invited</TextWithLine>
                </div>
                <p className="text-center font-sans text-gray-500 leading-7 px-4">
                  Together with their families, Madesh and Keerthana joyfully invite you to share in the celebration of their wedding.
                </p>
              </div>
            ) : (
              <Fragment>
                <div className="mb-5">
                  <TextWithLine>Dear</TextWithLine>
                </div>
                <div
                  className={
                    recipient.length < 50
                      ? "text-center font-sans text-gray-700 leading-7 text-lg font-semibold py-1"
                      : "text-center font-sans text-gray-700 leading-7 font-semibold px-4 md:px-0"
                  }
                >
                  {recipient}
                </div>
                <p className="text-center font-sans text-gray-500 leading-7 mt-5 px-2">
                  With hearts full of joy, we warmly invite you to join us on our special day and celebrate this beautiful new chapter with us.
                </p>
              </Fragment>
            )}
          </div>

          <button
            type="button"
            className="px-5 transition-all py-3 font-sans font-medium rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            onClick={onClose}
          >
            Open Invitation
          </button>
        </div>
      </div>
    </div>
  );
}
