import React from "react";

const Content = ({
  data: {
    title,
    date,
    organization,
    location,
    description,
    outputs,
    achievements,
  },
  position,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 md:gap-6 ${
        position
          ? "items-start text-left md:items-end md:text-right"
          : "items-start text-left"
      }`}
    >
      <p className="font-semibold text-neutral-600">{date}</p>

      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="font-medium text-neutral-800">{organization}</p>
      </div>

      <p className="break-words">{description}</p>

      <div
        className={`text-left flex flex-row flex-wrap gap-12 ${
          position ? "justify-end" : "justify-start"
        }`}
      >
        {outputs.length > 0 && <MilestoneList title="Outputs" list={outputs} />}
        {achievements.length > 0 && (
          <MilestoneList title="Achievements" list={achievements} />
        )}
      </div>
    </div>
  );
};

const MilestoneList = ({ title, list }) => {
  return (
    <div>
      <p className="text-accent ">{title}</p>

      <ol>
        {list.map((value, i) => (
          <li key={i}>
            {i + 1}. {value}
          </li>
        ))}
      </ol>
    </div>
  );
};

export { Content, MilestoneList };
