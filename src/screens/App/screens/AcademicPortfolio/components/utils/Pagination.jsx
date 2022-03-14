import React from "react";
import { useAcademicPortfolioContext } from "../../../../../../context/AcademicPortfolioContext";

const Pagination = () => {
  const { year, YEARS, toggleThisYear, toggleAll } =
    useAcademicPortfolioContext();

  return (
    <div className="flex flex-row gap-2">
      <Arrows>
        <button
          onClick={toggleThisYear}
          className={`bg-white w-32 h-7
          rounded outline outline-accent
          text-sm font-medium text-accent
          transition duration-150 ease-linear
          hover:bg-accent hover:text-white`}
        >
          {YEARS[year]}
        </button>

        <TermPagination />
      </Arrows>

      <button
        onClick={toggleAll}
        className={`bg-accent bg-opacity-20 text-accent font-medium text-sm
        h-7 px-2
        rounded border border-accent border-opacity-10
        transition duration-150 ease-linear
        hover:border-accent`}
      >
        ALL
      </button>
    </div>
  );
};

const Arrows = ({ children }) => {
  const { paginateYear } = useAcademicPortfolioContext();

  return (
    <div className="flex flex-row gap-2">
      <button
        onClick={() => paginateYear(false)}
        className={`bg-accent bg-opacity-90 text-white
          w-7 h-7 rounded
          transition duration-100 ease-linear
          hover:ring-1 hover:ring-accent hover:ring-offset-1`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 m-auto"
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

      <div className="flex flex-row gap-2">{children}</div>

      <button
        onClick={() => paginateYear(true)}
        className={`bg-accent bg-opacity-90 text-white
          w-7 h-7 rounded
          transition duration-100 ease-linear
          hover:ring-1 hover:ring-accent hover:ring-offset-1`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 m-auto"
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
    <>
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
    </>
  );
};

const Button = ({ term, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={` ${active ? "bg-accent text-white" : "bg-white text-accent"}
      bg-opacity-90 font-medium 
      border border-accent
      text-sm text-center rounded-sm w-7 h-7
      transition duration-100 ease-linear
      hover:ring-1 hover:ring-accent hover:ring-offset-1`}
    >
      {term}
    </button>
  );
};

export default Pagination;
