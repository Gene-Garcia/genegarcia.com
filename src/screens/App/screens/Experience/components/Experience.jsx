import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";

function Experience() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("EXPERIENCE");
  }, []);

  return (
    <Container>
      <Heading head="Experience" />

      <div className="mt-10 space-y-12">
        <Group />
        <Group />
        <Group />
      </div>
    </Container>
  );
}
export default Experience;

function Group() {
  return (
    <div className="w-eightfive overflow-hidden shadow-xl rounded-t-lg">
      <div className="h-36 relative transform -rotate-3 z-20 -mt-12 -ml-4">
        <div className=" bg-accent w-full h-full flex items-center p-10">
          <p className="text-white font-semibold text-2xl">
            Academic Experience
          </p>
        </div>
      </div>

      <div className="h-80 relative shadow-xl z-10 -mt-6 rounded-b-lg">
        content
      </div>
    </div>
  );
}
