import React, { useState } from "react";
import { Link } from "react-router-dom";
import fabData from "./fabData";

const FloatingActionButton = () => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="fixed right-0 bottom-0 pr-6 pb-6 flex flex-col items-end justify-center gap-3">
      <div className={`flex flex-col gap-2`}>
        {toggled &&
          Object.entries(fabData).map(([k, v]) => <SubButton key={k} {...v} />)}
      </div>

      <button
        onClick={() => {
          setToggled((prev) => !prev);
        }}
        className={`h-10 w-10 rounded-full bg-accent shadow
                hover:ring-2 hover:ring-accent hover:ring-offset-2
                hover:ring-opacity-70
                transition duration-200 ease-linear
                flex items-center justify-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};
export default FloatingActionButton;

const SubButton = ({ name, link, svg }) => {
  return (
    <Link
      to={link}
      className="group flex flex-row justify-end items-center gap-2"
    >
      <div className="hidden group-hover:block group-hover:text-accent font-medium text-sm text-gray-400">
        {name}
      </div>
      <button
        className={`h-9 w-9 rounded-full bg-gray-200 shadow-md 
    flex items-center justify-center
    transition duration-150 ease-linear
    hover:bg-gray-300
    text-gray-600`}
      >
        {svg}
      </button>
    </Link>
  );
};
