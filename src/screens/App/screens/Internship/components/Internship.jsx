import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import Codex from "./Codex";
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
      {/* <Outputs /> */}
    </div>
  );
};
export default Internship;
