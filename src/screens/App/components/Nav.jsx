import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex flex-row justify-between items-center px-6 h-ten">
      {/* logo */}
      <div className="flex flex-row items-center">
        <img src={imageLogo} className="w-1/6 h-1/6" />
        {/* <img src={textLogo} className="h-8 w-auto" /> */}
      </div>

      {/* links */}
      <div className="flex-grow-0 flex-shrink space-x-9">
        {Object.entries(routes).map(([k, v]) => (
          <Link
            key={k}
            to={v.PATH}
            className={`${
              linksState[k] ? "text-accent" : "text-black"
            } font-sans font-semibold text-sm transition duration-200 hover:text-accent border-b border-transparent hover:border-accent`}
          >
            {v.NAME.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Nav;
