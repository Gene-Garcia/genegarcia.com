import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
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
    <div className="fixed md:hidden z-50  right-0 bottom-0 pr-5 pb-5 flex flex-col items-end justify-center gap-3">
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={toggled}
      >
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
      </Transition>

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
            d="M4 6h16M4 12h16m-7 6h7"
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
        className={`font-medium text-xs 
                    text-stone-600
                    tracking-normal
                    bg-neutral-100 px-3 rounded py-0.5
                    transition duration-150 ease-linear
                    shadow-md
                    group-hover:bg-slate-200 group-hover:text-stone-800`}
      >
        {name}
      </div>

      <button
        className={`h-9 w-9 rounded-full 
                  ${
                    active
                      ? "text-white bg-accent"
                      : "text-gray-600 bg-gray-100"
                  }
                  shadow-md
                  flex items-center justify-center
                  transition duration-150 ease-linear
                  group-hover:bg-slate-200`}
      >
        {svg}
      </button>
    </Link>
  );
};
