import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindow from "../../../hooks/useWindow";

// route constants
import routes from "../../../shared/routes";

// Icon Logo
import imageLogo from "../../../shared/images/logov2.png";

// Text Logo
import textLogo from "../../../shared/images/logonamev1.png";
import useNavbar from "../../../context/useNavbar";

function Nav() {
  // navbar context
  const { linksState } = useNavbar();

  const { width } = useWindow();

  return (
    <>
      {width >= 600 ? (
        <Responsive context={linksState} />
      ) : (
        <Collapsible context={linksState} />
      )}
    </>
  );
}
export default Nav;

function Responsive({ context: linksState }) {
  return (
    <div className="flex flex-row justify-between items-center gap-x-0 px-3 md:px-6 h-ten">
      {/* logo */}
      <div className="flex flex-row flex-shrink items-center">
        <img src={imageLogo} className="w-10 h-11" alt="G" />
        {/* <img src={textLogo} className="h-8 w-auto" /> */}
      </div>

      {/* links */}
      <div className="flex-shrink-0 space-x-5 md:space-x-9">
        {Object.entries(routes).map(([k, v]) => (
          <Link
            key={k}
            to={v.PATH}
            className={`${
              linksState[k]
                ? "text-accent font-semibold"
                : "text-gray-800 font-medium"
            } font-sans text-sm transition duration-200 ease-linear hover:text-accent border-b border-transparent hover:border-accent`}
          >
            {v.NAME.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Collapsible({ context: linksState }) {
  const [toggled, setToggled] = useState(true);

  function toggleNav() {
    setToggled((prev) => !prev);
  }

  return (
    <div className="">
      <div className="p-3">
        <button onClick={toggleNav}>
          <img src={imageLogo} className="w-10 h-11" alt="G" />
        </button>
      </div>

      <div
        className={`${
          toggled ? "fixed" : "hidden"
        } z-50 p-3 bg-gray-200 w-48 left-0 inset-y-0 h-screen`}
      >
        <button onClick={toggleNav}>
          <img src={imageLogo} className="w-10 h-11" alt="G" />
        </button>

        {/* link */}
        <div className="my-14 flex flex-col space-y-8">
          {Object.entries(routes).map(([k, v]) => (
            <Link
              key={k}
              to={v.PATH}
              className={`${
                linksState[k] ? "text-accent" : "text-black"
              } font-sans font-semibold text-sm transition duration-200 hover:text-accent `}
            >
              {v.NAME.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
