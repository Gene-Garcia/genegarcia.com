import React, { useEffect, useState } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

// paper data
import paperData from "../utils/data";

function Papers() {
  // navbar context
  const { activateThisLink } = useNavbar();

  // toggled paper
  const [paper, setPaper] = useState({});

  //
  useEffect(() => {
    activateThisLink("PAPERS");
    setPaper({ ...paperData.SCGP });
  }, []);

  // function to toggle active paper
  const togglePaper = (id) => {
    setPaper({ ...paperData[id] });
  };

  return (
    <Container>
      <Heading head="Papers" />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/5 h-min shadow-md rounded-md py-2 lg:py-7">
          <div className="hidden md:block">
            {Object.entries(paperData).map(([k, v], i) => (
              <PaperButtons
                key={k}
                id={k}
                {...v}
                status={k === paper.id ? "active" : "idle"}
                first={i === 0}
                onClick={togglePaper}
              />
            ))}
          </div>
          <div className="block md:hidden">
            <PaperDropdown current={paper} togglePaper={togglePaper} />
          </div>
        </div>

        <div className="lg:w-3/5 ">
          <PaperContainer data={paper} />
        </div>
      </div>
    </Container>
  );
}
export default Papers;

function PaperDropdown({ current, togglePaper }) {
  return (
    <div className="w-full group inline-block relative py-2 px-4">
      {/* username and the arrow */}
      <button className={`w-full inline-flex items-center gap-2 text-gray-700`}>
        <div className=" text-left">
          <p className="text-sm font-medium text-gray-400">{current.date}</p>
          <span className="font-semibold text-md">{current.title}</span>
        </div>

        <svg
          className="fill-current h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>

      {/* the menu */}
      <div
        className="w-full absolute z-30 hidden 
      transition duration-300 ease-linear 
      group-hover:block"
      >
        <div
          className="w-full mt-1 bg-white shadow-lg rounded 
        border border-gray-200"
        >
          {Object.entries(paperData).map(([k, v]) =>
            v.id !== current.id ? (
              <DropdownButton
                key={k}
                date={v.date}
                title={v.title}
                id={v.id}
                togglePaper={togglePaper}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function DropdownButton({ date, title, id, togglePaper }) {
  return (
    <button
      className="px-4 py-3 w-full 
      inline-flex gap-3 items-center items-stretch
    transition ease-linear 
    duration-200 hover:bg-gray-100"
      onClick={() => togglePaper(id)}
    >
      <div className="flex flex-col items-center gap-0.5">
        <div className="mt-1 rounded-full h-4 w-3 bg-gray-300"></div>
        <div className="h-full border-l-2 border-gray-200"></div>
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-gray-400">{date}</p>
        <p className="text-md font-semibold text-gray-600">{title}</p>
      </div>
    </button>
  );
}

function PaperButtons({ id, date, title, status, first, onClick }) {
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
    <button
      onClick={() => onClick(id)}
      className="w-full flex flex-row px-7 gap-6 transition duration-300 ease-linear hover:bg-gray-100"
    >
      <div className="flex flex-col items-center">
        <div
          className={`${
            first ? "border-0" : "border-l-2"
          } h-2 mb-1 lg:mb-1.5 border-gray-200 `}
        ></div>
        <div
          className={`rounded-full h-3 w-3 ring-2 ring-offset-2 ${theme[status].circle}`}
        ></div>
        <div
          className={`h-16 lg:h-36 xl:h-28 border-l-2 mt-1 ${theme[status].line}`}
        ></div>
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
    <div className="space-y-6 lg:space-y-10">
      <div className="space-y-2.5">
        <p className="border border-accent rounded text-accent hover:text-white hover:bg-accent transition duration-200 ease-linear uppercase px-4 py-1.5 w-max text-sm font-semibold ">
          {paperType}
        </p>
        <h3 className="text-xl text-black font-medium">{title}</h3>
      </div>

      {/* some details */}
      <div className="space-y-2.5 text-sm font-semibold text-gray-500">
        <p>{date}</p>
        {doi && (
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
        )}

        {location && <p>{location}</p>}
      </div>

      {/* abstract */}
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-1">ABSTRACT</p>
        <p className="leading-loose bg-gray-50 text-body-color p-2 lg:p-2.5 rounded-md border">
          {abstract}
        </p>
      </div>
    </div>
  );
}
