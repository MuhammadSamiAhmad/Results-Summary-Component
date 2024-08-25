import SummaryElement from "./SummaryElement";
import data from "../constants/data.json";

const SummaryList = () => {
  return (
    <div className="font-hanken-grotesk size-full px-14">
      <h1 className="text-[#383F4F] font-bold text-2xl mt-8 mb-6">Summary</h1>
      <div id="elements-list" className="flex flex-col gap-6">
        {data.map((item, index) => (
          <SummaryElement key={index} item={item} />
        ))}
        <button className="rounded-3xl bg-[#383F4F] text-white font-bold p-3 mt-3 hover:bg-violet-blue transition-colors mb-5">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SummaryList;
