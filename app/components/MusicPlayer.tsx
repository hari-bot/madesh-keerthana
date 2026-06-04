import { Fragment, useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  play?: boolean;
  /* hide the control button (audio keeps playing) — e.g. on the welcome page */
  hideButton?: boolean;
}

const MusicPlayer = ({ play: playParent, hideButton }: MusicPlayerProps) => {
  const [play, setPlay] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);

  const onPlay = async () => {
    if (!audio.current) return;
    await audio.current.play();
    setPlay(true);
  };

  const onPause = async () => {
    if (!audio.current) return;
    audio.current.pause();
    setPlay(false);
  };

  useEffect(() => {
    if (playParent) onPlay();
    else onPause();
  }, [playParent]);

  return (
    <Fragment>
      <audio controls ref={audio} loop hidden>
        <source src={"/wedding.mp3"} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div
        className={`fixed bottom-0 right-0 z-50 mr-3 mb-3 md:mr-8 md:mb-8 ${
          hideButton ? "hidden" : ""
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* pulsing rings — only while playing */}
          {play && (
            <Fragment>
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#CE7BB0] opacity-60 animate-ping" />
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-[#CE7BB0] opacity-40 animate-ping"
                style={{ animationDelay: "0.6s" }}
              />
            </Fragment>
          )}

          <button
            className="relative z-10 rounded-full drop-shadow-md bg-[#CE7BB0] text-white w-9 h-9 md:w-11 md:h-11 flex items-center justify-center"
            onClick={() => {
              play ? onPause() : onPlay();
            }}
            aria-label={play ? "mute music" : "play music"}
          >
            <MusicIcon spinning={play} />
            {!play && <MuteSlash />}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

/* The music note. Gently bobs while playing. */
const MusicIcon = ({ spinning }: { spinning: boolean }) => (
  <svg
    className={`w-5 h-5 md:w-6 md:h-6 ${spinning ? "animate-bounce" : ""}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
  </svg>
);

/* Diagonal slash overlaid on the note when muted. */
const MuteSlash = () => (
  <svg
    className="absolute w-5 h-5 md:w-6 md:h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <line x1="3" y1="3" x2="21" y2="21" />
  </svg>
);

export default MusicPlayer;
