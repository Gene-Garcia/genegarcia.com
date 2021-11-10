import React from "react";

function Container({ children }) {
  return (
    <div className="py-12 mx-8 sm:mx-14 lg:mx-20 xl:mx-32 2xl:mx-36">
      {children}
    </div>
  );
}

export default Container;
