import React from "react";

function Heading({ head }) {
  return (
    <h1 className="font-serif text-2xl xl:text-3xl text-black font-semibold mb-6">
      {head}
    </h1>
  );
}
export default Heading;
