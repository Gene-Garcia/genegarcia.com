import React from "react";
import ExperienceDetails from "./ExperienceDetails";

function Group({ name, data }) {
  return (
    <div className="w-eightfive overflow-hidden shadow-xl rounded-t-lg">
      <div className="h-36 relative transform -rotate-3 -mt-12 -ml-4">
        <div className="bg-accent w-full h-full flex items-center p-10">
          <p className="text-white font-semibold text-xl">{name}</p>
        </div>
      </div>

      <div className="space-y-8 shadow-xl z-10 rounded-b-lg p-8">
        {Object.entries(data).map(([k, v]) => (
          <ExperienceDetails key={k} content={v} />
        ))}
      </div>
    </div>
  );
}

export default Group;
