import React, { useEffect } from "react";
import useNavbar from "../../../../../context/useNavbar";

function Home() {
  // navbar context
  const { activateThisLink } = useNavbar();

  //
  useEffect(() => {
    activateThisLink("HOME");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 lg:py-0 gap-y-8 sm:gap-y-10 lg:gap-y-0 lg:h-full">
      <div className="lg:w-1/2 xl:w-2/5 flex justify-center items-center">
        <div className="relative">
          <div className="w-72 h-72 sm:w-80 sm:h-80 lg:h-86 lg:w-86 xl:w-96 xl:h-96 rounded-full border-4 border-accent flex items-center justify-center">
            {/* image */}
          </div>

          <button className="absolute right-4 sm:right-6 lg:right-9 bottom-7 h-12 w-12 rounded-full bg-accent shadow-xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 h-full m-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 xl:w-2/5 flex flex-col px-8 sm:px-20 md:px-32 lg:px-0">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-black">
          Hey, I'm Gene
        </h1>
        <p className="font-sans font-light text-xl text-gray-400 mt-2">
          Gene Joseph Garcia
        </p>

        <div className="border-b-4 rounded border-accent my-8 w-24"></div>

        <p className="font-sans text-gray-600 text-xl sm:text-2xl w-11/12 lg:w-9/12">
          a <span className="font-semibold text-black">student</span>, and an
          aspiring{" "}
          <span className="font-semibold text-black">full stack developer</span>
          , <span>business analyst</span>, or{" "}
          <span className="font-semibold text-black">data analyst</span>
        </p>

        <div className="my-10 flex flex-row align-center gap-5">
          <button className="font-bold bg-accent text-md text-white px-5 lg:px-7 py-2 lg:py-2.5 rounded-md shadow-xl inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform rotate-90 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            EMAIL ME
          </button>

          <button className="font-bold text-md text-black px-5 py-2 lg:py-2.5 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            MY RÉSUMÉ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
