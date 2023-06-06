import { Link } from "react-router-dom";

const Files = () => {
  return (
    <div
      className="mx-auto grow shrink-0 py-28
              relative w-full  max-w-[60rem]
              flex flex-col
              gap-10"
    >
      <h2
        className="text-center
                  text-2xl font-serif
                  font-semibold"
      >
        Practicum Files
      </h2>

      <div className="grid grid-cols-2 gap-12   ">
        <File
          title="Practicum Report"
          location="https://drive.google.com/file/d/1Yhx0kzvNcreJQO-kRnnWtmfQkxA8qHeO/view?usp=drive_link"
          size="4.7"
          ext="MB"
        />
        <File
          title="Competency-Based CV"
          size="90"
          location="https://drive.google.com/file/d/1118h68AsvciOOZoeT7Soc1Uo3buDp9Fu/view?usp=drive_link"
        />
        <File
          title="Weekly Journals"
          size="2.3"
          ext="MB"
          location="https://drive.google.com/file/d/1uPiK38y81INPSe5EocN-rBgMbX9QZehz/view?usp=drive_link"
        />
        <File
          title="Training Plan"
          size="571"
          location="https://drive.google.com/file/d/1yeN4w240TpBJVNV88pFV-R5hg08U_ncK/view?usp=drive_link"
        />
        <File
          title="Practicum Acceptance"
          size="295"
          location="https://drive.google.com/file/d/1IuoLiGstr2cCwhKRcrCojfck2QkabCDW/view?usp=drive_link"
        />
        <File
          title="Liability Waiver"
          size="590"
          location="https://drive.google.com/file/d/1DH-YxAPGLS5dv4keKbCjtjcd3t3PcEpF/view?usp=drive_link"
        />
        <File
          title="Endorsement Letter"
          size="118"
          location="https://drive.google.com/file/d/18RAJe69LvxCqgjzZqvCDWd-2SZ-582Yd/view?usp=drive_link"
        />
        <File
          title="Intent Form"
          size="720"
          location="https://drive.google.com/file/d/1Qp0UNDg5517cO40PCXH5Sv7uRtaLBTE3/view?usp=drive_link"
        />
      </div>
    </div>
  );
};
export default Files;

const File = ({ title, size, type = "PDF", location, ext = "KB" }) => {
  return (
    <Link
      target="_blank"
      to={location}
      className="group w-full flex items-center gap-4
                bg-gray-50 p-2 rounded-lg
                border border-transparent
                hover:border-accent
                cursor-pointer
                transition duration-150 ease-linear"
    >
      <span
        className="shrink-0 text-white bg-accent rounded-md p-3
                    group-hover:bg-gray-300/50 group-hover:text-accent
                    transition duration-150 ease-linear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition duration-150 ease-linear
                    group-hover:rotate-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </span>

      <div>
        <p className="text-lg font-medium">{title}</p>
        <span className="flex gap-1 items-center text-sm">
          <span>{type}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </span>
          <span className="italic">
            {size}
            {ext}
          </span>
        </span>
      </div>
    </Link>
  );
};
