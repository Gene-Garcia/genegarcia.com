import React from "react";
import { useAcademicPortfolioContext } from "../../../../../../context/AcademicPortfolioContext";

const Pagination = () => {
  return (
    <div className="space-y-1">
      <YearPagination />
      <TermPagination />
    </div>
  );
};

const YearPagination = () => {
  const { paginateYear, year, YEARS } = useAcademicPortfolioContext();

  return (
    <div className="flex flex-row items-center justify-between">
      <button
        onClick={() => paginateYear(false)}
        className="text-gray-700 transition duration-150 ease-linear hover:text-accent p-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <p className="w-28 text-center text-sm">{YEARS[year]}</p>

      <button
        onClick={() => paginateYear(true)}
        className="text-gray-700 transition duration-150 ease-linear hover:text-accent p-0.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const TermPagination = () => {
  const { term, TERMS, paginateTerm } = useAcademicPortfolioContext();

  return (
    <div className="flex flex-row justify-between gap-1.5">
      <Button
        term="T1"
        active={TERMS[term] === "T1"}
        onClick={() => paginateTerm(0)}
      />
      <Button
        term="T2"
        active={TERMS[term] === "T2"}
        onClick={() => paginateTerm(1)}
      />
      <Button
        term="T3"
        active={TERMS[term] === "T3"}
        onClick={() => paginateTerm(2)}
      />
    </div>
  );
};

const Button = ({ term, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` ${active ? "bg-gray-600" : "bg-gray-400"}
      bg-opacity-70 text-white font-medium 
    text-sm w-10 rounded-tl rounded-br
    transition duration-100 ease-linear
    hover:bg-gray-200 hover:text-gray-700`}
    >
      {term}
    </button>
  );
};

export default Pagination;
