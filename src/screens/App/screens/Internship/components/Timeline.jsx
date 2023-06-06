import figure from "../../../../../shared/images/internship/timeline.png";

const Timeline = () => {
  return (
    <div
      className="grow shrink-0 py-32
                relative flex flex-col items-center
                gap-6
                bg-gray-100/50"
    >
      <h2
        className="text-center
                    text-2xl font-serif
                    font-semibold"
      >
        Timeline
      </h2>

      <div
        className="shadow rounded-md h-1/2 m-auto
                    space-y-10
                    drop-shadow-lg"
      >
        <img
          src={figure}
          className="w-full h-full object-contain"
          alt="Internship Timeline"
        />
      </div>

      <div className="flex gap-16">
        <Phase phase={1} title="General and IT Soft Skills" hours={27} />
        <Phase phase={2} title="Business Analytics Training" hours={41} />
        <Phase phase={3} title="Case Study" hours={40} />
        <Phase phase="3 (cont'd)" title="Work Immersion" hours={216} />
      </div>
    </div>
  );
};

export default Timeline;

const Phase = ({ phase, title, hours }) => {
  return (
    <div className="w-[15rem] border-b-2 border-accent px-2.5 py-1 rounded-r-full">
      <p className="font-sans font-semibold text-lg">Phase {phase}</p>
      <p className="font-serif font-medium">{title}</p>
      <p className="italic flex gap-1 items-center text-accent">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        {hours} Hours
      </p>
    </div>
  );
};
