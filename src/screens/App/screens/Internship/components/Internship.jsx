import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import Hero from "./Hero";

const Internship = () => {
  return (
    <div
      className="w-full h-full 
                    overflow-y-auto
                    flex flex-col items-stretch"
    >
      {/* <Heading head="Internship" /> */}

      <Hero />

      <div className="grow shrink-0 w-full h-full">
        <h1>Hey, I'm Gene</h1>
      </div>
    </div>
  );
};
export default Internship;
