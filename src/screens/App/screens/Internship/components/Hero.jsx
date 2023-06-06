import hero from "../../../../../shared/images/internship/hero.jpg";
import ftsi from "../../../../../shared/images/internship/ftsi.png";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center
                py-20
                px-8 sm:px-12 lg:px-16
                relative 
                min-h-screen"
    >
      <div
        className="z-50
                text-white text-center
                space-y-12"
      >
        <div className="h-auto max-w-[10rem] md:max-w-[12rem] lg:max-w-[16rem] mx-auto">
          <img src={ftsi} alt="Fasttrack Logo" className="w-full" />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black">
            Fasttrack Solutions, Inc.
          </h1>
          <h2 className="font-medium text-lg lg:text-xl italic">
            IT Solutions and Consulting Company
          </h2>
        </div>

        <div className="space-y-3 text-lg">
          <p>
            IT and SAP-enabled <Emphasize>business solutions</Emphasize>{" "}
            centered on reengineering business processes.
          </p>

          <p>
            1st Filipino <Emphasize>SAP Platinum Partner</Emphasize> and Member
            of the elite SAP Platinum Partners{" "}
            <Emphasize>United VARs</Emphasize>.
          </p>
        </div>

        <div
          className="text-left
                    flex flex-col md:flex-row 
                    gap-10
                    items-start justify-center"
        >
          <div className="max-w-[35rem]">
            <p className="font-bold mb-1.5">Mission</p>
            <p className="pl-4 font-serif">
              To be the best software solutions consulting company in Southeast
              Asia
            </p>
          </div>

          <div className="max-w-[35rem]">
            <p className="font-bold mb-1.5">Vision</p>
            <ul className="list-disc pl-8 font-serif space-y-2">
              <li>By producing the best quality consultants in the region.</li>
              <li>
                By making Fasttrack's customers delighted as their businesses
                are improved through the use of technology.
              </li>
              <li>
                Through the use of an effective consulting organization that is
                agile and responsive to the market needs.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="z-10 absolute w-full h-full
                bg-cover bg-center bg-no-repeat
                blur-sm
                brightness-50
                grayscale"
        style={{
          backgroundImage: `url('${hero}')`,
        }}
      ></div>

      {/* overlay */}
      <div
        className="z-20 bg-accent absolute w-full h-full
                opacity-80 brightness-50"
      ></div>
    </div>
  );
};
export default Hero;

const Emphasize = ({ children }) => {
  return <span className="font-bold">{children}</span>;
};
