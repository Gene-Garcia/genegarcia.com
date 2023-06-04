import React from "react";

function Container({ children }) {
  return (
    <div
      className="w-full h-full
                px-4 sm:px-8 md:px-12 
                lg:py-8"
    >
      {children}
    </div>
  );
}

export default Container;
