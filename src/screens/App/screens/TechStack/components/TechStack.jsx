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

      <div className="mt-10 flex flex-row gap-10">
        {/* buttons */}
        <div className="w-2/5 grid grid-cols-2 justify-start gap-7 h-min">
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
        <div className="w-3/5">
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
      <h3 className="mb-8 text-black text-2xl font-semibold">{title}</h3>

      <div className="space-y-8">
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

      <div className="flex flex-row gap-5 rounded shadow-md py-2 px-3">
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
      className={`group transition duration-300 shadow border-l-4 ${theme.root} rounded p-4 space-y-2 h-40 hover:border-black`}
      onClick={() => onClick(id)}
    >
      <div
        className={`h-10 w-10 rounded-full transition duration-300 ${theme.circle} group-hover:bg-black`}
      ></div>
      <p className="font-medium text-gray-900 text-xl ">{name}</p>
    </div>
  );
}
