import React from "react";

const Pagination = () => {
  return (
    <div className="space-y-1">
      <YearPagination />
      <TermPagination />
    </div>
  );
};

const YearPagination = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <button className="text-gray-700 transition duration-150 ease-linear hover:text-accent p-0.5">
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

      <p className="w-28 text-center text-sm">Sophomore</p>

      <button className="text-gray-700 transition duration-150 ease-linear hover:text-accent p-0.5">
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
  return (
    <div className="flex flex-row justify-between gap-1.5">
      <Button term="T1" />
      <Button term="T2" />
      <Button term="T3" />
    </div>
  );
};

const Button = ({ term }) => {
  return (
    <button className="bg-accent bg-opacity-80 text-white font-medium text-sm w-10 rounded-tl rounded-br">
      {term}
    </button>
  );
};

export default Pagination;
