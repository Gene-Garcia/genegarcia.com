import ba from "../../../../../shared/images/internship/ba.webp";
import foundation from "../../../../../shared/images/internship/foundation.webp";
import immersion from "../../../../../shared/images/internship/immersion.webp";
import result from "../../../../../shared/images/internship/result.webp";

const Synthesis = () => {
  return (
    <div
      className="mx-auto grow shrink-0 py-28
                relative w-full min-h-screen
                bg-gray-100/50
                flex flex-col items-center justify-center"
    >
      <div className="w-full px-8 sm:px-12 lg:px-16 max-w-[60rem] space-y-14">
        <h2
          className="text-center
                  text-2xl font-serif
                  font-semibold"
        >
          Synthesis and Learnings
        </h2>

        {/* cards */}
        <div className="grid grid-cols-2 gap-12">
          <Card icon={foundation} num="1" title="General IT and Soft SKills" />
          <Card icon={ba} num="2" title="BA Training" />
          <Card icon={immersion} num="3" title="Immersion" />
          <Card icon={result} num="4" title="Result" />
        </div>
      </div>
    </div>
  );
};
export default Synthesis;
const Card = ({ num, title, icon }) => {
  return (
    <div
      className="w-full flex gap-8 items-center
                shadow rounded-lg p-6 bg-white
                transition-all ease-in-out
                border border-transparent
                hover:border-accent hover:shadow-lg
                group relative"
    >
      <div
        className="bg-accent rounded-full w-8 h-8 
                    absolute -left-4 -top-4
                    text-white text-lg font-semibold
                    flex items-center justify-center "
      >
        {num}
      </div>

      <div
        className="shrink-0 w-32 h-32 rounded-lg bg-gray-100
                    transition-all ease-in-out duration-200
                    group-hover:rotate-6 group-hover:scale-110
                    object-contain p-6"
      >
        <img src={icon} className="w-full" />
      </div>

      <div className="grow shrink">
        <h3 className="text-xl font-semibold">{title}</h3>

        <div></div>
      </div>
    </div>
  );
};
