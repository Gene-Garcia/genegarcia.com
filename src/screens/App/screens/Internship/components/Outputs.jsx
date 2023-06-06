import img1 from "../../../../../shared/images/internship/case study dashboard.png";

const Outputs = () => {
  return (
    <div
      className="grow shrink-0 py-32
                relative flex flex-col items-center
                gap-6"
    >
      {/* grid canvas */}
      <div className="columns-md gap-8 space-y-8 border rounded-lg">
        <div className="aspect-square">
          <img src={img1} className="w-full" />
        </div>
      </div>

      <div>
        <h4>Case Study</h4>
      </div>
    </div>
  );
};
export default Outputs;
