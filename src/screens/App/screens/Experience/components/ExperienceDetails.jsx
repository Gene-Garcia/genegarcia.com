import React from "react";

function ExperienceDetails({
  content: {
    title,
    date,
    organization,
    location,
    organizationLogo,
    description,
    outputs,
    achievements,
  },
}) {
  const List = ({ name, items }) => {
    return items.length > 0 ? (
      <div>
        <p className="text-accent">{name}</p>
        {items.map((e, i) => (
          <p key={i} className="">
            {i + 1}. {e}
          </p>
        ))}
      </div>
    ) : (
      <></>
    );
  };

  return (
    <div className="relative z-20 flex flex-col sm:flex-row gap-3 sm:gap-10 py-8">
      <div className="w-20 h-20 rounded-full p-3 shadow bg-gray-100 flex justify-center items-center flex-shrink-0">
        <img src={organizationLogo} alt={title} className="w-full h-full" />
      </div>

      <div className="w-full sm:w-3/4 space-y-5 flex-grow">
        <div className="">
          <h3 className="text-2xl font-semibold text-black uppercase">
            {title}
          </h3>

          <p>
            <span className="text-lg font-medium text-accent">
              {organization}
            </span>
            , <span className="font-regular text-gray-600">{location}</span>
          </p>

          <p className="text-md font-medium text-gray-500">{date}</p>
        </div>

        <p className="leading-7 text-body-color">{description}</p>

        <div className="flex flex-row gap-20 text-gray-700 text-sm">
          <List name="Output" items={outputs} />
          <List name="Achievements" items={achievements} />
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
