import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import Codex from "./Codex";
import Files from "./Files";
import Hero from "./Hero";
import Outputs from "./Outputs";
import Timeline from "./Timeline";

const Internship = () => {
  return (
    <div
      className="w-full h-full 
                flex flex-col"
    >
      <Hero />
      <Codex />
      <Timeline />
      <Outputs />
      <Files />
    </div>
  );
};
export default Internship;
