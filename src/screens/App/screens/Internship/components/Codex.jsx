import logo from "../../../../../shared/images/internship/codex.png";

const Codex = () => {
  return (
    <div
      className="snap-proximity grow shrink-0 py-32
                relative flex flex-col items-center
                gap-6"
    >
      <h2
        className="text-center
                    text-2xl font-serif
                    font-semibold"
      >
        Internship Program
      </h2>

      <div
        className="shadow rounded-md w-[40%] m-auto
                    space-y-10"
      >
        <img
          src={logo}
          className="w-full h-full object-contain"
          alt="CODEX Program"
        />
      </div>
    </div>
  );
};
export default Codex;
