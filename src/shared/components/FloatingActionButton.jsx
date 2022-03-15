import React, { useState } from "react";
import { Link } from "react-router-dom";
import useNavbar from "../../context/useNavbar";
import fabData from "./fabData";

const FloatingActionButton = () => {
  const [toggled, setToggled] = useState(false);

  // listener to close floating action button after clicking a link
  const listenToClick = () => {
    setToggled(false);
  };

  // navbar context
  const { linksState } = useNavbar();

  return (
    <div className="fixed right-0 bottom-0 pr-5 pb-5 flex flex-col items-end justify-center gap-3">
      <div className={`flex flex-col items-end gap-2 mr-1`}>
        {toggled &&
          Object.entries(fabData).map(([k, v]) => (
            <SubButton
              key={k}
              listener={listenToClick}
              active={linksState[k]}
              {...v}
            />
          ))}
      </div>

      <button
        onClick={() => {
          setToggled((prev) => !prev);
        }}
        className={` h-11 w-11 rounded-full bg-accent
                filter drop-shadow-2xl
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

const SubButton = ({ name, link, svg, active, listener }) => {
  return (
    <Link
      onClick={listener}
      to={link}
      className="group flex flex-row items-center w-max gap-2"
    >
      <div
        className={`font-medium text-xs text-white
        tracking-normal
      bg-gray-500 bg-opacity-80 px-3 rounded py-0.5
      transition duration-150 ease-linear
      group-hover:bg-gray-500`}
      >
        {name}
      </div>

      <button
        className={`h-9 w-9 rounded-full 
    ${active ? "text-white bg-accent" : "text-gray-600 bg-gray-200"}
    flex items-center justify-center
    transition duration-150 ease-linear
    group-hover:bg-gray-300    `}
      >
        {svg}
      </button>
    </Link>
  );
};
