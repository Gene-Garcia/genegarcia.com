import React, { useEffect, useState } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import { GetImage } from "../../../../../shared/utils/buildTechnologyPhotos";

// techonology stack data
import techStackData from "../utils/data";

function TechStack() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("TECH_STACK");
    setData(techStackData.WEB_APPLICATION);
  }, []);

  // state variable to hold the current toggled tech stack card button
  const [data, setData] = useState(null);

  // drilled onclick function to change toggled data. maybe use a context?
  const updateData = (id) => {
    setData(techStackData[id]);
  };

  return (
    <Container>
      <Heading head="Technology Stack" />

      <div className="flex flex-col sm:flex-row gap-12 sm:gap-8 md:gap-16 xl:gap-8">
        {/* buttons */}
        <div className="sm:w-2/5 grid grid-cols-1 xl:grid-cols-2 justify-start gap-4 sm:gap-6 xl:gap-8 h-min">
          {Object.entries(techStackData).map(([k, v], i) => {
            console.log(i);

            return (
              <CardButton
                key={k}
                id={k}
                name={v.title}
                svg={v.svg}
                color={i}
                onClick={updateData}
              />
            );
          })}
        </div>

        {/* content */}
        <div className="sm:w-3/5">
          {/* check first if data is not null, as it is populate in useEffect. */}
          {data != null && <TechnologyContainer data={data} />}
        </div>
      </div>
    </Container>
  );
}
export default TechStack;

function TechnologyContainer({ data: { title, groups } }) {
  return (
    <div>
      <h3 className="mb-4 sm:mb-6 xl:mb-8 text-black text-2xl font-semibold">
        {title}
      </h3>

      <div className="space-y-4 sm:space-y-6 xl:space-y-8">
        {groups.map((e, i) => (
          <GroupContainer group={e} key={i} />
        ))}
      </div>
    </div>
  );
}

function GroupContainer({ group: { title, technology } }) {
  return (
    <div>
      <h4 className="text-blue-400 text-lg">{title}</h4>

      <div className="flex flex-wrap gap-5 rounded shadow-md py-2 px-3">
        {technology.map((e, i) => (
          <img src={GetImage(e)} className="w-16 object-contain" />
        ))}
      </div>
    </div>
  );
}

function CardButton({ id, name, color, svg, onClick }) {
  const theme = {
    root: "",
    circle: "",
  };

  // set theme of card button
  if (color === 0) {
    theme.root = "border-sky-800 ";
    theme.circle = "bg-sky-800";
  } else if (color === 1) {
    theme.root = "border-sky-600";
    theme.circle = "bg-sky-600";
  } else if (color === 2) {
    theme.root = "border-cyan-600";
    theme.circle = "bg-cyan-600";
  } else if (color === 3) {
    theme.root = "border-cyan-500";
    theme.circle = "bg-cyan-500";
  } else if (color === 4) {
    theme.root = "border-sky-500";
    theme.circle = "bg-sky-500";
  }

  return (
    <div
      className={`flex flex-row sm:flex-col items-center sm:items-start transition duration-500 ease-linear shadow hover:shadow-2xl border-l-4 ${theme.root} rounded p-3 md:p-4 gap-3 sm:gap-1 md:gap-2 sm:h-24 md:h-32 xl:h-40`}
      onClick={() => onClick(id)}
    >
      <div
        className={`h-8 w-8 md:h-10 md:w-10 rounded-full ${theme.circle}
                    flex items-center justify-center text-center text-white`}
      >
        {svg}
      </div>
      <p className="font-semibold text-gray-700 text-lg ">{name}</p>
    </div>
  );
}
