import React from "react";

function SubtleContainer({ children }) {
  return (
    <div className="p-10 shadow-md w-thirty rounded-md flex items-stretch border-l border-t border-gray-300">
      {children}
    </div>
  );
}

function FocusedContainer({ children }) {
  return (
    <div className="p-10 shadow-2xl w-2/5 rounded-md flex items-stretch border-t border-l border-gray-300">
      {children}
    </div>
  );
}

export { SubtleContainer, FocusedContainer };
