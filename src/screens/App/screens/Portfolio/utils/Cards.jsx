import React, { useEffect, useState } from "react";
import {
  buildTechnologyGallery,
  buildProjectGallery,
} from "../../../../../shared/utils/buildProjectPhotos";

function ProjectCard({
  id,
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
  const [techPhotos, setTechPhotos] = useState([]);
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  useEffect(() => {
    setTechPhotos(buildTechnologyGallery(technologies));
    setGalleryPhotos(buildProjectGallery(id));
  }, []);

  // hook state to hold the toggle of the gallery
  const [toggled, setToggled] = useState(false);

  return (
    <>
      {/* card */}
      <div className="shadow-lg rounded p-5 flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* logo */}
        <div className="w-2/5 lg:w-thirty m-auto">
          <img src={logo} className="w-full object-contain m-auto" />
        </div>

        {/* contents */}
        <div className="lg:w-seventy space-y-5">
          <div>
            <h3 className="text-2xl font-semibold text-black">{name}</h3>
            <p className="font-light italic text-gray-500">{date}</p>
          </div>

          <p className="text-body-color xl:w-11/12 leading-relaxed">
            {longDescription}
          </p>

          <div className="flex flex-wrap flex-row gap-4">
            <a
              href={live.toString()}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>{" "}
              LIVE
            </a>

            <a
              href={github.toString()}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                />
              </svg>{" "}
              GITHUB REPO
            </a>

            <button
              onClick={() => setToggled((prev) => !prev)}
              className="text-black font-semibold px-3 py-1.5"
            >
              GALLERY
            </button>
          </div>

          <div className="border-b border-gray-300 rounded w-1/2 mx-auto"></div>

          {/* languages & technologies */}
          <div className="flex flex-wrap flex-row gap-8 justify-center items-center">
            {techPhotos.map((e, i) => (
              <img
                key={i}
                src={e}
                className="w-11 filter grayscale transition duration-100 hover:filter-none"
              />
            ))}
          </div>
        </div>
      </div>

      {/* gallery */}
      <div
        className={`${toggled ? "block" : "hidden"}  py-5 shadow-lg rounded`}
      >
        <Gallery
          images={galleryPhotos}
          orientation={`${id === "TUTOQUIZZER" ? "VERTI" : "HORI"}`}
        />
      </div>
    </>
  );
}

/*
 * The orientation is implemented because a project (TutoQuizzer) is a smartphone application,
 * hence, its screenshot is vertical. Setting it as the same width width with the vertical
 * images will make it much larger
 */
function Gallery({ images, orientation }) {
  return (
    <div className="transition duration-200 flex flex-row gap-4 overflow-x-scroll pb-4">
      {images.map((image, i) => (
        <img
          src={image}
          key={i}
          className={`${orientation === "HORI" ? "w-1/3" : "w-2/12"} shadow`}
        />
      ))}
    </div>
  );
}

export { ProjectCard, Gallery };
