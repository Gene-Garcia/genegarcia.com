import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import lokalLogo from "../../../../../shared/images/project_logos/lokal.png";
import buildGallery from "../../../../../shared/utils/buildGalleryPhotos";

function ProjectCard({
  data: {
    name,
    logo,
    date,
    description,
    longDescription,
    live,
    github,
    technologies,
  },
}) {
  // initialize gallery photos
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(buildGallery(technologies));
  }, []);

  return (
    <>
      {/* card */}
      <div className="shadow-lg rounded p-5 flex flex-row gap-8">
        {/* logo */}
        <div className="w-ten m-auto">
          <img src={logo} className="w-full object-contain m-auto" />
        </div>

        {/* contents */}
        <div className="w-ninety space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-black">{name}</h3>
            <p className="font-light italic text-gray-500">{date}</p>
          </div>

          <p className="text-body-color w-11/12 leading-relaxed">
            {longDescription}
          </p>

          <div className="flex flex-row gap-4">
            <a
              href={live}
              target="_blank"
              className={`${
                live === false && "cursor-not-allowed opacity-75"
              } bg-accent text-white font-semibold px-5 py-1.5 rounded shadow inline-flex items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 h-full mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>{" "}
              LIVE
            </a>

            <a
              href={github}
              target="_blank"
              className={`${
                github === false && "cursor-not-allowed opacity-50"
              } border border-black rounded text-black font-semibold px-5 py-1.5 rounded inline-flex items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 h-full my-auto mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>{" "}
              GITHUB REPO
            </a>

            <button className="text-black font-semibold px-3 py-1.5">
              GALLERY
            </button>
          </div>

          <div className="border-b border-gray-300 rounded w-1/2 mx-auto"></div>

          {/* languages & technologies */}
          <div className="flex flex-row gap-8 justify-center items-center">
            {photos.map((e) => (
              <img
                src={e}
                className="w-11 filter grayscale transition duration-100 hover:filter-none"
              />
            ))}
          </div>
        </div>
      </div>

      {/* gallery */}
      <></>
    </>
  );
}

function Gallery() {}

export { ProjectCard, Gallery };
