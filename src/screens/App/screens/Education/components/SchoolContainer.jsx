import React from "react";

function SubtleContainer({ children }) {
  return (
    <div className="p-7 sm:p-10 shadow-md w-full lg:w-5/12 xl:w-thirty rounded-md flex items-stretch ">
      {children}
    </div>
  );
}

function FocusedContainer({ children }) {
  return (
    <div className="order-first xl:order-none p-7 sm:p-10 shadow-lg xl:shadow-2xl w-full lg:w-5/12 xl:w-2/5 rounded-md flex items-stretch ">
      {children}
    </div>
  );
}

export { SubtleContainer, FocusedContainer };
