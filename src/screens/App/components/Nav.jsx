import React from "react";
import { Link } from "react-router-dom";

// route constants
import routes from "../../../shared/routes";

// Icon Logo
import imageLogo from "../../../shared/images/logov2.png";

// Text Logo
import textLogo from "../../../shared/images/logonamev1.png";

function Nav() {
  return (
    <div className="flex flex-row justify-between items-center px-6 py-2.5">
      {/* logo */}
      <div className="flex flex-row items-center">
        <img src={imageLogo} className="w-1/6 h-1/6" />
        {/* <img src={textLogo} className="h-8 w-auto" /> */}
      </div>

      {/* links */}
      <div className="flex-grow-0 flex-shrink space-x-9">
        {Object.entries(routes).map(([k, v]) => (
          <Link
            to={v.PATH}
            className="font-sans font-semibold text-gray-500 text-sm transition duration-200 hover:text-blue-300"
          >
            {v.NAME.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Nav;
