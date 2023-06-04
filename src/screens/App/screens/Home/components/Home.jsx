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
    <div className="flex flex-col lg:flex-row w-full items-center justify-center py-8 lg:py-0 gap-y-8 sm:gap-y-10 lg:gap-y-0 lg:h-full">
      <div className="lg:w-1/2 xl:w-2/5 flex justify-center items-center">
        <Hero />
      </div>

      <div
        className="lg:w-1/2 xl:w-2/5 flex flex-col 
                  px-8 sm:px-20 md:px-32 lg:px-0
                  gap-10"
      >
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-black">
            Hey, I'm Gene
          </h1>
          <p className="font-sans font-light text-xl text-gray-400 mt-2">
            Gene Joseph Garcia
          </p>
        </div>

        <div className="border-b-4 rounded border-accent w-24"></div>

        <div className="space-y-5">
          <p className="font-sans text-gray-600 text-xl sm:text-2xl w-11/12 lg:w-9/12">
            an aspiring{" "}
            <span className="font-semibold text-black">
              full stack developer
            </span>{" "}
            and <span className="font-semibold text-black">data analyst</span>.
          </p>

          <div
            className="flex flex-col items-start sm:flex-row align-center 
                      gap-4"
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:genejogarcia.gg@gmail.com?subject=Let's create and collaborate!"
              className="font-bold bg-accent text-md text-white 
                        text-sm md:text-base
                        px-5 lg:px-7 py-2 lg:py-2.5 
                        shadow-md md:shadow-xl rounded
                        inline-flex items-center 
                        transition duration-200 ease-linear 
                        ring-4 ring-transparent 
                        hover:ring-accent hover:ring-opacity-40 "
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

            <a
              href="https://drive.google.com/file/d/1118h68AsvciOOZoeT7Soc1Uo3buDp9Fu/view?usp=sharing"
              download
              target="_blank"
              rel="noreferrer"
              className="font-bold text-md text-black 
                        px-5 py-2 lg:py-2.5 
                        inline-flex items-center 
                        rounded
                        transition duration-200 ease-linear
                        hover:bg-gray-100
                        active:bg-gray-200"
            >
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
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
export default Home;

const Hero = () => {
  return (
    <div className="relative">
      <div className="object-contain w-72 h-72 sm:w-80 sm:h-80 lg:h-86 lg:w-86 xl:w-96 xl:h-96 rounded-full flex items-center justify-center">
        <img src={meHero} className="m-auto" alt="Gene Garcia Hero" />
      </div>

      <a
        href="https://www.linkedin.com/in/gene-joseph-garcia-633324171/"
        target="_blank"
        rel="noreferrer"
        className="absolute 
                  right-6 sm:right-6 lg:right-9 
                  bottom-10
                  h-12 w-12 border-4 
                  border-white rounded-full bg-accent shadow-xl 
                  text-accent 
                  transition duration-200 ease-linear 
                  ring-4 ring-transparent hover:ring-accent hover:ring-opacity-60
                  active:ring-opacity-100"
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
  );
};

const SocialLinks = () => {
  return (
    <>
      <SocialLink
        href="https://github.com/Gene-Garcia"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            shapeRendering="geometricPrecision"
            textrendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillrule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 640 640"
            fill="currentColor"
          >
            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" />
          </svg>
        }
      />
      <SocialLink
        href="https://www.facebook.com/gene.garciaaa/"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            viewBox="0 0 48 48"
            fill="currentColor"
          >
            <path d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
            <path
              fill="#fff"
              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
            ></path>
          </svg>
        }
      />
      <SocialLink
        href="https://www.researchgate.net/profile/Gene-Joseph-Garcia"
        svg={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Research Gate"
            role="img"
            viewBox="0 0 512 512"
            className="w-6 h-6"
            fill="currentColor"
          >
            <rect width="512" height="512" rx="15%" fill="currentColor" />
            <g fill="#feffff">
              <path d="m271 383c-15-4-23-10-36-26-9-12-26-39-35-53l-6-11h-24l0 34c1 43 0 42 19 45l10 1 0 4 0 4h-80l0-4c0-4 1-4 9-6 10-2 14-5 15-14 1-4 1-31 1-79-0-70-1-72-3-77-3-5-7-7-18-8-4-1-5-1-5-5v-4l43-1c55-1 65 0 81 11 15 10 22 24 20 43-1 21-17 42-37 50-4 1-7 3-7 3 0 2 17 28 28 43 15 21 27 32 36 37 4 2 9 3 10 3 3 0 3 1 3 4 0 3-1 5-2 5-5 2-19 2-26 0zm-57-109c14-7 22-18 23-35 1-13-2-22-10-30-9-10-25-14-48-12l-10 1v39c0 36 0 40 2 40 1 0 9 1 18 0 14-0 17-1 24-4z" />
              <path d="m321 228c-25-4-34-20-32-61 1-21 3-30 11-38 7-7 13-9 25-10 13-1 21 2 29 8 5 4 9 10 9 13 0 1-3 2-6 4l-6 3-3-3c-5-6-9-9-14-11-10-3-20 2-25 11-3 5-3 6-3 29 0 22 0 25 3 29 4 7 12 11 21 10 13-1 20-10 20-24v-7l-10-0-10-0v-13h36l-0 15c-0 12-1 16-3 22-6 15-23 24-42 22z" />
            </g>
          </svg>
        }
      />
    </>
  );
};

const SocialLink = ({ href, svg }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="rounded 
                h-11 w-11 flex items-center justify-center
                text-gray-400 
                transition duration-200 ease-linear
                hover:text-gray-500 hover:bg-gray-100
                active:text-accent"
    >
      {svg}
    </a>
  );
};
