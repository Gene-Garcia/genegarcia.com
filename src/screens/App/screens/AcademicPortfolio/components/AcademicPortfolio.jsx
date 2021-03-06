import React, { useEffect } from "react";
import {
  AcademicPortfolioProvider,
  useAcademicPortfolioContext,
} from "../../../../../context/AcademicPortfolioContext";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

// portfolio data
import data from "../utils/data";
import Pagination from "./utils/Pagination";

const AcademicPortfolio = () => {
  // navbar context
  const { activateThisLink } = useNavbar();
  //
  useEffect(() => {
    activateThisLink("ACADEMIC_PORTFOLIO");
  }, []);

  return (
    <Container>
      <AcademicPortfolioProvider>
        <AcademicPortfolioContainer />
      </AcademicPortfolioProvider>
    </Container>
  );
};
export default AcademicPortfolio;

const AcademicPortfolioContainer = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <Heading head="Academic Portfolio" />
        <div className={`hidden md:block`}>
          <Pagination />
        </div>
      </div>

      <div className="min-h-98 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        <RenderPortfolio />
      </div>

      <div className="mt-10 w-max m-auto">
        <Pagination />
      </div>
    </>
  );
};

const RenderPortfolio = () => {
  const { YEARS, year, TERMS, term, all, thisYear } =
    useAcademicPortfolioContext();

  let renderData = [];

  if (!all && !thisYear) {
    renderData = data[YEARS[year].toUpperCase()];
    if (renderData) renderData = renderData[TERMS[term]];
  } else if (all) {
    Object.entries(data).forEach(([, yearValue]) => {
      Object.entries(yearValue).forEach(([, termArray]) => {
        renderData = [...renderData, ...termArray];
      });
    });
  } else if (thisYear) {
    Object.entries(data[YEARS[year].toUpperCase()]).forEach(([, termArray]) => {
      renderData = [...renderData, ...termArray];
    });
  }

  return (
    <>
      {renderData ? (
        renderData.length > 0 ? (
          renderData.map((d) => <PortfolioCard key={d.COURSE_CODE} data={d} />)
        ) : (
          <h1>No outputs for this year and term yet</h1>
        )
      ) : (
        <h1>No outputs for this year and term yet</h1>
      )}
    </>
  );
};

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
    PRACTICAL: "bg-gray-400 text-white",
  };

  return (
    <div
      className={`h-full shadow rounded-bl-3xl rounded-tr-3xl rounded-md p-5
     flex flex-col justify-between gap-y-5
     transition duration-200 ease-linear
     border border-transparent
     hover:shadow-2xl hover:border-gray-400 hover:border-opacity-50`}
    >
      <div className="flex flex-col sm:flex-row justify-between gap-x-2 gap-y-3">
        <div className="">
          <p className="font-semibold">{NAME}</p>
          <p className="text-sm font-medium text-accent">{CODE}</p>
          <p className="text-sm text-gray-700">
            {PROF}
            <span className="text-xs italic text-gray-700">, professor</span>
          </p>
        </div>

        <div className="flex flex-col items-end gap-0.5">
          {TYPES.map((type) => (
            <span
              key={type}
              className={`${typesThemes[type]} text-2xs w-max font-regular px-2 rounded-full`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3 className="font-semibold text-gray-500 mb-1 tracking-tight leading-tight">
            {PROJECT}
          </h3>
          <p className="text-black text-base">{DESC}</p>
        </div>

        {(LIVE || FILE) && (
          <div className="border-t border-gray-300 flex flex-row gap-3 pt-3">
            {LIVE && (
              <a
                target="_blank"
                href={LIVE}
                className={`bg-accent rounded px-5 py-1.5 
          text-sm text-white font-semibold
          transition duration-150 ease-linear
          hover:bg-opacity-85
          hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-opacity-50
          active:ring active:ring-accent active:ring-offset-0`}
              >
                LIVE
              </a>
            )}

            {FILE && (
              <a
                target="_blank"
                href={FILE}
                className={`bg-white rounded px-5 py-1.5
            border border-accent
          text-accent text-sm font-semibold
          transition duration-150 ease-linear
          hover:ring-1 hover:ring-accent hover:ring-offset-2
          active:bg-accent active:text-white`}
              >
                FILE
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
