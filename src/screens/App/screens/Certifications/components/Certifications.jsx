import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";
import Container from "../../../../../shared/components/Container";
import Heading from "../../../../../shared/components/Heading";
import data from "../utils/data";

function Certifications() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("CERTIFICATIONS");
  }, []);

  return (
    <Container>
      <Heading head="Certifications" />

      <div
        className="grid content-center
      grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 
      grid-rows-none lg:grid-rows-4 xl:grid-rows-2 
      lg:grid-flow-col gap-8"
      >
        {Object.entries(data).map(([k, v]) => (
          <div
            key={k}
            className={`max-w-[30rem] lg:max-w-none ${v.GRID_SPAN} flex flex-col items-center`}
          >
            <img src={v.LOGO} className="w-16 h-16 rounded shadow z-10" />
            <div className="self-stretch bg-white rounded-lg shadow-lg pb-6 pt-10 px-5 -mt-8">
              <h2 className="text-center text-xl font-semibold text-gray-600">
                {v.NAME}
              </h2>

              <div className="flex flex-col gap-8 mt-8">
                {Object.entries(v.CERTS).map(
                  ([
                    k2,
                    {
                      TITLE,
                      DATE_COMPLETED,
                      EXPIRATION_DATE,
                      CREDENTIAL_ID,
                      CREDENTIAL_LINK,
                      SHORT_DESCRIPTION,
                    },
                  ]) => (
                    <div key={k2}>
                      <h4 className="text-lg font-medium font-serif mb-1">
                        {TITLE}
                      </h4>

                      <p className="text-neutral-400 text-sm">
                        Issued {DATE_COMPLETED} • {EXPIRATION_DATE}
                      </p>
                      <a
                        href={CREDENTIAL_LINK}
                        target="_blank"
                        className="text-neutral-400 text-sm group"
                      >
                        Credential ID{" "}
                        <span className="group-hover:underline">
                          {CREDENTIAL_ID}
                        </span>
                      </a>

                      <p className="mt-4 text-sm">{SHORT_DESCRIPTION}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
export default Certifications;
