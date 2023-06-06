import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindow from "../../hooks/useWindow";

// route constants
import routes from "../../shared/routes";

// Icon Logo
import imageLogo from "../../shared/images/LogoV3.2.png";

// Text Logo
import textLogo from "../../shared/images/logonamev1.png";
import useNavbar from "../../context/useNavbar";

const NavigationBar = () => {
  // navbar context
  const { linksState } = useNavbar();

  // const { width } = useWindow();

  return (
    <>
      <nav
        className="shrink-0 w-full h-auto 
                flex items-center
                justify-center lg:justify-end xl:justify-center
                relative
                py-8 lg:py-4
                px-6 xl:px-8
                lg:shadow-lg
                text-end"
      >
        <div
          className="w-7  h-auto absolute 
                  lg:left-8"
        >
          <img src={imageLogo} className="object-contain" alt="Gene Garcia" />
        </div>

        <div className="hidden lg:block space-x-2 xl:space-x-4">
          {Object.entries(routes).map(([k, v]) => (
            <Link
              key={k}
              to={v.PATH}
              className={`${
                linksState[k]
                  ? "text-accent font-semibold"
                  : "text-gray-500 font-medium"
              } px-1.5 py-1.5 bg-gray-0
          font-sans text-xs xl:text-sm
          transition duration-200 ease-linear 
          border-b-2 border-transparent
          hover:text-accent hover:border-accent/80
          active:text-my-purple
          lowercase`}
            >
              {v.NAME}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );

  return (
    <nav
      className="hidden md:flex flex-col xl:flex-row 
              justify-between items-center 
              gap-x-0 px-3 md:px-6 
              gap-y-4 xl:gap-y-0
              xl:h-ten
              py-6 xl:py-0"
    >
      {/* logo */}
      <div className=" flex-shrink-0 flex flex-row flex-shrink items-center">
        <img src={imageLogo} className="w-8" alt="G" />
        {/* <img src={textLogo} className="h-8 w-auto" /> */}
      </div>

      {/* links */}
      <div
        className="flex-grow flex flex-row flex-wrap 
    justify-center xl:justify-end items-center 
    gap-y-1.5 gap-x-3"
      >
        {Object.entries(routes).map(([k, v]) => (
          <Link
            key={k}
            to={v.PATH}
            className={`${
              linksState[k]
                ? "text-accent font-semibold bg-gray-50"
                : "text-gray-800 font-medium"
            } px-3 py-1.5 bg-gray-0 rounded-md
          font-sans text-xs lg:text-sm
          transition duration-200 ease-linear 
          hover:text-accent hover:bg-gray-100
          active:text-my-purple`}
          >
            {v.NAME.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};
export default NavigationBar;

function Collapsible({ context: linksState }) {
  const [toggled, setToggled] = useState(true);

  function toggleNav() {
    setToggled((prev) => !prev);
  }

  return (
    <div className="">
      <div className="p-4">
        <button onClick={toggleNav}>
          <img src={imageLogo} className="w-8" alt="G" />
        </button>
      </div>

      <div
        className={`${
          toggled ? "fixed" : "hidden"
        } z-50 p-4 bg-gray-200 w-48 left-0 inset-y-0 h-screen`}
      >
        <button onClick={toggleNav}>
          <img src={imageLogo} className="w-8" alt="G" />
        </button>

        {/* link */}
        <div className="my-12 flex flex-col space-y-7">
          {Object.entries(routes).map(([k, v]) => (
            <Link
              key={k}
              to={v.PATH}
              className={`${
                linksState[k] ? "text-accent" : "text-gray-600"
              } font-sans font-medium text-base transition duration-200 hover:text-accent `}
            >
              {v.NAME.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
