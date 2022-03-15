import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buildProjectGallery } from "../../../../../shared/utils/buildProjectPhotos";
import { GetImage } from "../../../../../shared/utils/buildTechnologyPhotos";

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
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  useEffect(() => {
    setGalleryPhotos(buildProjectGallery(id));
  }, []);

  // hook state to hold the toggle of the gallery
  const [toggled, setToggled] = useState(false);

  return (
    <>
      {/* card */}
      <div className="shadow-lg rounded flex flex-col lg:flex-row">
        {/* logo */}
        <div className="flex-shrink-0 bg-gray-100 lg:h-auto w-full lg:w-thirty xl:w-1/5 flex justify-center items-center">
          <img
            src={logo}
            className="min-w-44 w-thirty sm:w-2/6 md:w-thirty lg:w-full object-contain filter drop-shadow-xl lg:p-5 2xl:p-10"
          />
        </div>

        {/* contents */}
        <div className="flex-grow flex flex-col justify-between">
          <div className="p-5 flex-grow flex-shrink flex flex-col justify-around gap-4">
            <div>
              <h3 className="text-xl font-semibold text-black">{name}</h3>
              <p className="text-sm font-light italic text-gray-500">{date}</p>
            </div>

            <p className="text-body-color leading-relaxed">{longDescription}</p>

            {/* buttons */}
            <div className="flex flex-wrap flex-row gap-3">
              <Link
                to={live.toString()}
                target="_blank"
                className={`${!live && "hidden"}`}
              >
                <button
                  className={`bg-accent px-4 py-1.5 rounded shadow 
                inline-flex items-center
                text-white font-medium text-sm tracking-wide
                transition duration-200 ease-linear
                hover:ring-1 hover:ring-accent hover:ring-offset-2 hover:ring-opacity-90
                active:ring active:ring-accent active:ring-opacity-25 active:ring-offset-0`}
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
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>{" "}
                  LIVE
                </button>
              </Link>

              <Link
                to={github.toString()}
                target="_blank"
                className={`${!github && "hidden"}`}
              >
                <button
                  className={`border border-gray-400 rounded px-4 py-1.5 rounded 
                inline-flex items-center
                text-gray-700 text-sm font-medium tracking-wide
                transition duration-200 ease-linear
                hover:ring-1 hover:ring-gray-400 hover:ring-opacity-90 hover:ring-offset-2
                active:bg-gray-100 `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 h-full my-auto mr-1.5"
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
                  GITHUB
                </button>
              </Link>

              <button
                onClick={() => setToggled((prev) => !prev)}
                className={`text-gray-600 text-sm font-medium px-2 py-1.5
              border border-transparent rounded
              transition duration-200 ease-linear
              hover:text-accent hover:border-accent hover:border-opacity-60`}
              >
                GALLERY
              </button>
            </div>
          </div>

          {/* languages & technologies */}
          <div className=" py-2 px-4 flex flex-wrap row gap-4 2xl:gap-5 items-center justify-end">
            {technologies.map((e, i) => (
              <img
                key={i}
                src={GetImage(e)}
                className="h-auto w-9 2xl:w-10 filter grayscale transition duration-150 ease-linear hover:filter-none"
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
          className={`${
            orientation === "HORI"
              ? "w-4/5 lg:w-4/6 xl:w-3/5 2xl:w-1/2"
              : "w-thirty sm:w-2/5 md:w-thirty lg:w-1/5 xl:w-2/12"
          } shadow`}
        />
      ))}
    </div>
  );
}

export { ProjectCard, Gallery };
