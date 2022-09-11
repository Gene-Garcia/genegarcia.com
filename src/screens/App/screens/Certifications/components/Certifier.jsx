import React from "react";
import CertContainer from "./CertContainer";

const Certifier = ({ data: { LOGO, NAME, GRID_SPAN, CERTS } }) => {
  return (
    <div
      className={`max-w-[30rem] lg:max-w-none ${GRID_SPAN} flex flex-col items-center`}
    >
      <img src={LOGO} className="w-16 h-16 rounded shadow z-10" />
      <div className="self-stretch bg-white rounded-lg shadow-lg pb-6 pt-10 px-5 -mt-8">
        <h2 className="text-center text-xl font-semibold text-gray-600">
          {NAME}
        </h2>

        <div className="flex flex-col gap-8 mt-8">
          {Object.entries(CERTS).map(([k, v]) => (
            <CertContainer key={k} data={v} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Certifier;
