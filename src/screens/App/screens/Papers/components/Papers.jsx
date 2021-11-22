import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

// paper data
import paperData from "../utils/data";

function Papers() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("PAPERS");
  }, []);

  return (
    <Container>
      <Heading head="Papers" />

      <div className="mt-10 flex flex-row gap-10">
        <div className="w-2/5 h-min shadow-md rounded-md py-7">
          {Object.entries(paperData).map(([k, v], i) => (
            <PaperButtons
              key={k}
              {...v}
              status={k == "INCIDENT_REPORTING" ? "active" : "idle"}
              first={i === 0}
            />
          ))}
        </div>

        <div className="w-3/5">
          <PaperContainer data={paperData.COVID_FMIS} />
        </div>
      </div>
    </Container>
  );
}
export default Papers;

function PaperButtons({ date, title, status, first }) {
  const theme = {
    idle: {
      circle: "bg-gray-200 ring-transparent",
      line: "border-gray-200",
    },
    active: {
      circle: "bg-accent bg-opacity-80 ring-accent",
      line: "border-accent border-opacity-50",
    },
  };

  return (
    <button className="flex flex-row px-7 gap-6 transition duration-300 ease-linear hover:bg-gray-100">
      <div className="flex flex-col items-center">
        <div
          className={`${first ? "border-0" : "border-l-2"} h-2  mb-1 ${
            theme[status].line
          } `}
        ></div>
        <div
          className={`rounded-full h-4 w-4 ring-2 ring-offset-2 ${theme[status].circle}`}
        ></div>
        <div className={`h-28 border-l-2 mt-1 ${theme[status].line}`}></div>
      </div>

      <div className="py-2.5">
        <p className="text-left text-sm font-medium text-gray-400">{date}</p>
        <p className="text-left font-medium text-gray-800">{title}</p>
      </div>
    </button>
  );
}

function PaperContainer({
  data: { paperType, title, date, doi, link, location, abstract },
}) {
  return (
    <div className="space-y-10">
      <div className="space-y-2.5">
        <p className="border border-accent rounded text-accent hover:text-white hover:bg-accent transition duration-200 ease-linear uppercase px-4 py-1.5 w-max text-sm font-semibold ">
          {paperType}
        </p>
        <h3 className="text-xl text-black font-medium">{title}</h3>
      </div>

      {/* some details */}
      <div className="space-y-2.5 text-sm font-semibold text-gray-500">
        <p>{date}</p>
        <p>
          DOI:{" "}
          <a
            href={link}
            className="underline hover:text-accent transition duration-200"
            target="_blank"
          >
            {doi}
          </a>
        </p>
        <p>{location}</p>
      </div>

      {/* abstract */}
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-2.5">ABSTRACT</p>
        <p className="leading-loose">{abstract}</p>
      </div>
    </div>
  );
}
