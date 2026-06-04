import receptionImg from "~/images/reception.jpeg";
import weddingImg from "~/images/wedding.jpeg";

const CALENDAR_URL = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+of+Madesh+%26+Keerthana+%F0%9F%92%8C&location=https%3A%2F%2Fmaps.app.goo.gl%2FvzqG8wntFUae68A&details=With+great+joy%2C+we+invite+you+to+celebrate+the+wedding+of+Madesh+%26+Keerthana.%0A%0AReception%3A+23+June+2026+at+6%3A00+PM%0AWedding+Ceremony%3A+24+June+2026+at+6%3A00+AM+%E2%80%93+7%3A00+AM%0A%0AWe+would+be+honoured+to+have+you+join+us+on+our+special+day.&dates=20260623T123000Z%2F20260624T013000Z`;

const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ClockIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

interface EventCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  /* tailwind utility theme bits so each card gets its own colour accent */
  cardClass: string;
  accentText: string;
  accentBorder: string;
  ringClass: string;
}

const EventCard = ({
  title,
  image,
  date,
  time,
  venue,
  city,
  cardClass,
  accentText,
  accentBorder,
  ringClass,
}: EventCardProps) => (
  <div
    className={`flex-1 rounded-2xl border shadow-md p-8 backdrop-blur-sm ${cardClass}`}
  >
    <h4
      className={`text-lg font-sans font-bold tracking-widest uppercase mb-4 ${accentText}`}
    >
      {title}
    </h4>
    <hr className={`mb-6 ${accentBorder}`} />

    {/* Framed couple photo */}
    <div
      className={`mx-auto mb-6 w-44 overflow-hidden rounded-xl border-2 bg-white p-1.5 shadow-sm ring-1 ${accentBorder} ${ringClass}`}
    >
      <img
        src={image}
        alt={`${title} — Madesh & Keerthana`}
        className="w-full h-52 object-cover rounded-lg"
      />
    </div>

    <div className="flex justify-center gap-10 mb-6">
      <div className={`flex flex-col items-center gap-2 ${accentText}`}>
        <CalendarIcon className="w-5 h-5" />
        <span className="font-sans text-sm font-semibold">{date}</span>
      </div>
      <div className={`flex flex-col items-center gap-2 ${accentText}`}>
        <ClockIcon className="w-5 h-5" />
        <span className="font-sans text-sm font-semibold">{time}</span>
      </div>
    </div>
    <p className="font-sans text-gray-500 text-sm">
      At <strong className="text-gray-700">{venue}</strong>, {city}
    </p>
  </div>
);

const Agendas = () => {
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <h3 className="text-3xl font-head font-bold mb-2 text-gray-700">
        Events
      </h3>
      <p className="text-gray-500 font-sans mb-10">
        Join us to celebrate our wedding
      </p>

      <div className="flex flex-col md:flex-row gap-6 mb-10">
        <EventCard
          title="Reception"
          image={receptionImg}
          date="23 June 2026"
          time="6:00 PM"
          venue="Durga Mahal A/c"
          city="Katpadi"
          cardClass="bg-gradient-to-b from-[#FCEDF4]/80 to-white/75 border-[#E9B7D2]"
          accentText="text-[#B5638F]"
          accentBorder="border-[#E9B7D2]"
          ringClass="ring-[#F3D6E6]"
        />

        <EventCard
          title="Wedding Ceremony"
          image={weddingImg}
          date="24 June 2026"
          time="6:00 AM – 7:30 AM"
          venue="Durga Mahal A/c"
          city="Katpadi"
          cardClass="bg-gradient-to-b from-[#FCEDF4]/80 to-white/75 border-[#E9B7D2]"
          accentText="text-[#B5638F]"
          accentBorder="border-[#E9B7D2]"
          ringClass="ring-[#F3D6E6]"
        />
      </div>

      <a
        href={CALENDAR_URL}
        target="_blank"
        className="inline-block px-8 py-3 transition-all text-base font-semibold rounded-lg bg-contrast hover:bg-contrast-2 text-white cursor-pointer"
        rel="noreferrer"
      >
        Save to Calendar
      </a>
    </div>
  );
};

export default Agendas;
