import React from "react";

function ProjectCard() {
  return (
    <>
      {/* card */}
      <div>
        {/* logo */}
        <div>
          <img />
        </div>

        {/* contents */}
        <div>
          <h3>Lokal</h3>

          <p>
            Nulla in urna rhoncus, mollis justo et, pretium tellus. Aliquam
            eleifend pretium semper. Donec laoreet eu massa a lobortis. Donec
            commodo auctor mauris.
          </p>

          <div className="flex flex-row gap-4">
            <button className="bg-accent text-white font-semibold px-5 py-1.5 rounded shadow">
              LIVE
            </button>

            <button className="border border-black rounded text-black font-semibold px-5 py-1.5 rounded">
              GITHUB REPO
            </button>

            <button className="text-black font-semibold px-2 py-1.5">
              GALLERY
            </button>
          </div>

          <div className="border-b rounded"></div>

          {/* languages & technologies */}
          <div></div>
        </div>
      </div>

      {/* gallery */}
    </>
  );
}

function Gallery() {}

export { ProjectCard, Gallery };
