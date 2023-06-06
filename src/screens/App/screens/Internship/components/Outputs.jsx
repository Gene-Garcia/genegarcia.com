import balanceSheet from "../../../../../shared/images/internship/balance sheet dashboard.png";
import caseDash from "../../../../../shared/images/internship/case study dashboard.png";
import caseRep1 from "../../../../../shared/images/internship/case study report 1.png";
import caseRep2 from "../../../../../shared/images/internship/case study report 2.png";
import caseRep3 from "../../../../../shared/images/internship/case study report 3.png";
import caseRep4 from "../../../../../shared/images/internship/case study report 4.png";
import blueprint from "../../../../../shared/images/internship/dkt blueprint.png";
import finance from "../../../../../shared/images/internship/finance dashboard.png";
import monitoring from "../../../../../shared/images/internship/monitoring.jpg";
import phase1 from "../../../../../shared/images/internship/phase 1 result.png";
import phase2 from "../../../../../shared/images/internship/phase 2 result.png";
import processChains from "../../../../../shared/images/internship/process chains.png";
import puebloDash from "../../../../../shared/images/internship/pueblo dashboard.png";
import puebloTab from "../../../../../shared/images/internship/pueblo tabular.png";
import scheduling from "../../../../../shared/images/internship/report scheduling.jpg";
import validation from "../../../../../shared/images/internship/report validation.jpg";
import salesDash from "../../../../../shared/images/internship/sales dashboard poc.png";

const Outputs = () => {
  return (
    <div
      className="mx-auto grow shrink-0 py-10
                px-8 sm:px-12 lg:px-16
                relative w-full max-w-[70rem]
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

      <div className="space-y-6">
        <Output title="Phase Assessments" media={[phase1, phase2]} />
        <Output title="Report Validation" media={validation} />
        <Output title="Report Monitoring" media={monitoring} />
        <Output title="Report Rescheduling" media={scheduling} />
        <Output title="Process Chains Monitoring" media={processChains} />
        <Output title="Finance Dashboard" media={finance} />
        <Output title="POC Dashboards" media={[balanceSheet, salesDash]} />
        <Output title="Blue Print" media={blueprint} />
        <Output title="Deliverable Dashboard" media={[puebloDash, puebloTab]} />
        <Output
          title="Case Study"
          media={[caseDash, caseRep1, caseRep2, caseRep3, caseRep4]}
        />
      </div>
    </div>
  );
};
export default Outputs;

const Output = ({ title, media }) => {
  return (
    <div className="py-3 relative group">
      <div className="w-full max-h-[25rem] rounded-lg overflow-auto flex flex-col items-center justify-start">
        {Array.isArray(media) ? (
          media.map((m, i) => (
            <img
              src={m}
              alt={`${title}-${i}`}
              className="w-full object-contain m-auto h-full"
            />
          ))
        ) : (
          <img
            src={media}
            alt={title}
            className="w-full object-contain m-auto h-full"
          />
        )}
      </div>

      <h4
        className="absolute top-0 inset-x-0 
                    font-sans font-semibold text-white p-2 text-md 
                    bg-gradient-to-b from-neutral-800 min-h-[5rem]
                    rounded-t-lg
                    group-hover:opacity-30
                    transition-opacity duration-300 ease-in-out"
      >
        {title}
      </h4>
    </div>
  );
};
