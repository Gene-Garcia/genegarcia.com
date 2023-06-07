import { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import Codex from "./Codex";
import Files from "./Files";
import Hero from "./Hero";
import Outputs from "./Outputs";
import Timeline from "./Timeline";
import Synthesis from "./Synthesis";

const Internship = () => {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("INTERNSHIP");
  }, []);

  return (
    <div
      className="w-full h-full 
                flex flex-col"
    >
      <Hero />
      <Codex />
      <Timeline />
      <Outputs />
      <Synthesis />
      <Files />
    </div>
  );
};
export default Internship;
