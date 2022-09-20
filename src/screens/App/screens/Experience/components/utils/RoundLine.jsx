import React from "react";

const RoundLine = () => {
  return (
    <>
      <div className="w-0.5 h-2 bg-slate-300"></div>
      {/* circle */}
      <div className="shrink-0 w-4 h-4 rounded-full bg-accent/80"></div>
      {/* line */}
      <div className="grow shrink w-0.5 min-h-[3.5cm] h-full bg-slate-300"></div>
    </>
  );
};

export default RoundLine;
