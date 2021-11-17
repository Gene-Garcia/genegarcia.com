import React, { useEffect, useState } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

function TechStack() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("TECH_STACK");
  }, []);

  // state variable to hold the current toggled tech stack card button
  const [data, setData] = useState({});

  return (
    <Container>
      <Heading head="Technology Stack" />

      <div className="mt-10">
        {/* buttons */}
        <div className="w-2/5 grid grid-cols-2 gap-5">
          <CardButton name="Web Application" color="blue" />
          <CardButton name="Smartphone" color="orange" />
          <CardButton name="Desktop" color="green" />
          <CardButton name="Services" color="purple" />
        </div>

        {/* content */}
        <div className="w-3/5"></div>
      </div>
    </Container>
  );
}
export default TechStack;

function CardButton({ name, color }) {
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
    >
      <div
        className={`h-10 w-10 rounded-full transition duration-300 ${theme.circle} group-hover:bg-black`}
      ></div>
      <p className="font-medium text-gray-900 text-xl ">{name}</p>
    </div>
  );
}
