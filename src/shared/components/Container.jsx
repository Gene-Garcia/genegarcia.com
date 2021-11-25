import React from "react";

function Container({ children }) {
  return (
    <div className="py-6 pb-12 mx-6 sm:mx-16 lg:mx-20 xl:mx-32 2xl:mx-36">
      {children}
    </div>
  );
}

export default Container;
