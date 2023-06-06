import hero from "../../../../../shared/images/internship/hero.jpg";

const Hero = () => {
  return (
    <div
      className="grow shrink-0 
                w-full h-full
                relative flex items-center"
    >
      <div
        className="z-50 m-auto h-max w-max 
                text-white text-center
                space-y-12"
      >
        <div className="space-y-3">
          <h1 className="text-5xl font-black">FastTrack Solutions Inc</h1>
          <h2 className="font-medium text-xl">
            IT Solutions and Consulting Company
          </h2>
        </div>

        <div>
          <p>
            IT and SAP-enabled business solutions centered on reengineering
            business processes.
          </p>

          <p>
            1st Filipino SAP Platinum Partner and Member of the elite SAP
            Platinum Partners United VARs
          </p>
        </div>

        <div
          className="text-left
                    flex flex-row gap-10
                    items-start justify-center"
        >
          <div className="max-w-[35rem]">
            <p>Mission</p>
            <p>
              To be the best software solutions consulting company in Southeast
              Asia
            </p>
          </div>

          <div className="max-w-[35rem]">
            <p>Vision</p>
            <ul className="list-disc pl-6">
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
        className="z-10 absolute h-full w-full
                bg-cover bg-center bg-no-repeat
                blur-sm"
        style={{
          backgroundImage: `url('${hero}')`,
        }}
      ></div>

      {/* overlay */}
      <div
        className="z-20 bg-accent absolute h-full w-full 
                opacity-80 brightness-50"
      ></div>
    </div>
  );

  return (
    <div
      className="w-full h-full relative
                bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${hero}')`,
      }}
    >
      {/* overlay */}
      <div className="z-20 bg-accent absolute inset-0 opacity-80 brightness-50"></div>
    </div>
  );

  return (
    <div class="flex h-full justify-center items-center flex-col">
      <div
        style={{
          backgroundImage: `url('${hero}')`,
        }}
        class={`w-full h-full bg-cover bg-center`}
      >
        <div
          class="w-full h-full flex  justify-center items-center 
         bg-accent/30 "
        >
          <div className="bg-white w-[20rem] h-[20rem]"></div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
