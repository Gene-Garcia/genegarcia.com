import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useNavbar from "../../../../../context/useNavbar";
import meHero from "../../../../../shared/images/me-hero.webp";

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
          <div className="object-contain w-72 h-72 sm:w-80 sm:h-80 lg:h-86 lg:w-86 xl:w-96 xl:h-96 rounded-full  flex items-center justify-center">
            <img src={meHero} className="m-auto" />
          </div>

          <a
            href="https://www.linkedin.com/in/gene-joseph-garcia-633324171/"
            target="_blank"
            className="absolute right-4 sm:right-6 lg:right-9 bottom-7 h-12 w-12 border-4 border-white rounded-full bg-accent shadow-xl text-accent transition duration-200 ease-linear ring-4 ring-transparent hover:ring-white hover:ring-opacity-40"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="m-auto p-2.5"
              style={{ fill: "#fff" }}
            >
              <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
            </svg>
          </a>
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
          <a
            target="_blank"
            href="mailto:genejogarcia.gg@gmail.com?subject=I would like to connect with you!"
            className="font-bold bg-accent text-md text-white px-5 lg:px-7 py-2 lg:py-2.5 shadow-xl inline-flex items-center transition duration-200 ease-linear ring-4 ring-transparent hover:ring-accent hover:ring-opacity-40 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform rotate-90 mr-1.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            EMAIL ME
          </a>

          <button className="font-bold text-md text-black px-5 py-2 lg:py-2.5 inline-flex items-center border border-transparent hover:border-gray-300 transition duration-200 ease-linear">
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
