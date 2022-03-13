import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

// portfolio data
import data from "../utils/data";

const AcademicPortfolio = () => {
  // navbar context
  const { activateThisLink } = useNavbar();
  //
  useEffect(() => {
    activateThisLink("ACADEMIC_PORTFOLIO");
  }, []);

  return (
    <Container>
      <Heading head="Academic Portfolio" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <PortfolioCard data={data.FRESHMAN.TERM1[0]} />
        <PortfolioCard data={data.FRESHMAN.TERM1[1]} />
        <PortfolioCard data={data.FRESHMAN.TERM1[0]} />
        <PortfolioCard data={data.FRESHMAN.TERM1[1]} />
        <PortfolioCard data={data.FRESHMAN.TERM1[0]} />
        <PortfolioCard data={data.FRESHMAN.TERM1[0]} />
      </div>
    </Container>
  );
};
export default AcademicPortfolio;

const PortfolioCard = ({ data }) => {
  const {
    COURSE_NAME: NAME,
    COURSE_CODE: CODE,
    PROFESSOR: PROF,
    TYPES,
    PROJECT_NAME: PROJECT,
    PROJECT_DESCRIPTION: DESC,
    LIVE_LINK: LIVE,
    FILE_LINK: FILE,
  } = data;

  const typesThemes = {
    RESEARCH: "bg-my-green text-white",
    PROGRAMMING: "bg-my-orange text-white",
    "CASE STUDY": "bg-my-purple text-white",
  };

  return (
    <div className="h-full shadow rounded-md p-5 flex flex-col justify-between gap-y-5">
      <div className="flex flex-col sm:flex-row justify-between gap-x-2 gap-y-3">
        <div className="">
          <p className="font-semibold">{NAME}</p>
          <p className="text-sm font-medium text-accent">{CODE}</p>
          <p className="text-base text-gray-700">
            {PROF}
            <span className="text-xs italic text-gray-700">, professor</span>
          </p>
        </div>

        <div className="flex flex-col items-end gap-0.5">
          {TYPES.map((type) => (
            <span
              key={type}
              className={`${typesThemes[type]} text-xs w-max font-regular px-2 rounded-full`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3 className="font-medium">{PROJECT}</h3>
          <p className="text-gray-800 text-base">{DESC}</p>
        </div>

        <div className="border-t border-gray-300 flex flex-row gap-3 pt-3">
          <button
            className={`bg-accent rounded px-5 py-1.5 
          text-sm text-white font-semibold
          transition duration-150 ease-linear
          hover:bg-opacity-85
          hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-opacity-50
          active:ring active:ring-accent active:ring-offset-0`}
          >
            LIVE
          </button>
          <button
            className={`bg-white rounded px-5 py-1.5
            border border-accent
          text-accent text-sm font-semibold
          transition duration-150 ease-linear
          hover:ring-1 hover:ring-accent hover:ring-offset-2
          active:bg-accent active:text-white`}
          >
            FILE
          </button>
        </div>
      </div>
    </div>
  );
};
