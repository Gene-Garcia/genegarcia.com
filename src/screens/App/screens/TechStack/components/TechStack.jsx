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
          <CardButton
            id="WEB_APPLICATION"
            name="Web Application"
            color="blue"
            onClick={updateData}
          />
          <CardButton
            id="SMARTPHONE"
            name="Smartphone"
            color="orange"
            onClick={updateData}
          />
          <CardButton
            id="DESKTOP"
            name="Desktop"
            color="green"
            onClick={updateData}
          />
          <CardButton
            id="SERVICES"
            name="Services"
            color="purple"
            onClick={updateData}
          />
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

function CardButton({ id, name, color, onClick }) {
  const theme = {
    root: "",
    circle: "",
  };

  // set theme of card button
  if (color === "blue") {
    theme.root = "border-accent ";
    theme.circle = "bg-accent";
  } else if (color === "orange") {
    theme.root = "border-my-orange";
    theme.circle = "bg-my-orange";
  } else if (color === "green") {
    theme.root = "border-my-green";
    theme.circle = "bg-my-green";
  } else if (color === "purple") {
    theme.root = "border-my-purple";
    theme.circle = "bg-my-purple";
  }

  return (
    <div
      className={`flex flex-row sm:flex-col items-center sm:items-start transition duration-500 ease-linear shadow hover:shadow-2xl border-l-4 ${theme.root} rounded p-3 md:p-4 gap-3 sm:gap-1 md:gap-2 sm:h-24 md:h-32 xl:h-40`}
      onClick={() => onClick(id)}
    >
      <div
        className={`h-8 w-8 md:h-10 md:w-10 rounded-full ${theme.circle}`}
      ></div>
      <p className="font-medium text-gray-800 text-lg md:text-xl ">{name}</p>
    </div>
  );
}
