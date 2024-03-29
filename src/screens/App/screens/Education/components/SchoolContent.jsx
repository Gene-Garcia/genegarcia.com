import React from "react";

function SchoolContent({
  data: { school, specialization, logo, awards, linkName, link, state },
}) {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      <img src={logo} className="w-min h-20" alt={school} />

      {/* details */}
      <div className="flex flex-col gap-6 lg:gap-9 justify-between flex-grow">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-black">{school}</h3>
          <p className="text-base font-medium text-gray-500 leading-tight">
            {specialization}
          </p>
          <span className="mt-0.5 text-sm font-medium text-gray-400 italic">
            {state}
          </span>
        </div>

        <div className="space-y-3">
          {Object.entries(awards).map(([k, v]) => (
            <Awards key={k} title={v.name} lists={v.list} />
          ))}
        </div>

        <div className="inline-flex items-center gap-1.5 group">
          <a
            target="_blank"
            href={link}
            className="text-accent text-opacity-85 font-medium border-b border-transparent transition duration-200 ease-linear group-hover:border-gray-400 "
          >
            {linkName}
          </a>
          {/* arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transition duration-200 ease-linear text-gray-600 group-hover:text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default SchoolContent;

function Awards({ title, lists }) {
  return (
    <div className="">
      <p className="text-accent text-sm">{title}</p>

      <ol className="space-y-0.5">
        {lists.map((e, i) => (
          <li className="text-sm" key={i}>
            {i + 1}. {e}
          </li>
        ))}
      </ol>
    </div>
  );
}
