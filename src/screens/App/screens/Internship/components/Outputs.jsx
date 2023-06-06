import img1 from "../../../../../shared/images/internship/case study dashboard.png";

const Outputs = () => {
  return (
    <div
      className="mx-auto grow shrink-0 py-10
                relative w-full max-w-[60rem]
                flex flex-col
                gap-12 "
    >
      <h2
        className="text-center
                    text-2xl font-serif
                    font-semibold"
      >
        Practicum Outputs
      </h2>

      <Output title="Phase Assessments" />
      <Output title="Report Validation" />
      <Output title="Report Monitoring" />
      <Output title="Report Rescheduling" />
      <Output title="Process Chains Monitoring" />
      <Output title="Finance Dashboard" />
      <Output title="POC Dashboards" />
      <Output title="Blue Print" />
      <Output title="Deliverable Dashboard" />
      <Output title="Case Study" />
    </div>
  );
};
export default Outputs;

const Output = ({ title }) => {
  return (
    <div className="py-3 relative">
      <div className="w-full h-56 rounded-lg bg-gray-200/50"></div>

      <h4
        className="absolute top-0 inset-x-0 
                    font-sans font-semibold text-white p-2 text-md 
                    bg-gradient-to-b from-accent min-h-[3rem]
                    rounded-t-lg"
      >
        {title}
      </h4>
    </div>
  );
};
