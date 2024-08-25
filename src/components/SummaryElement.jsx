import ReactionIcon from "../assets/images/icon-reaction.svg";
import MemoryIcon from "../assets/images/icon-memory.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

const iconMap = {
  Reaction: ReactionIcon,
  Memory: MemoryIcon,
  Verbal: VerbalIcon,
  Visual: VisualIcon,
};

const SummaryElement = ({ item }) => {
  const Icon = iconMap[item.category];

  return (
    <div
      className={`flex flex-row gap-3 p-5 rounded-xl justify-between`}
      style={{ backgroundColor: item.color }}
    >
      <div className="flex flex-row gap-4 items-center">
        <img src={Icon} alt={`${item.category} icon`} />
        <h2 className={`font-bold`} style={{ color: item.textcolor }}>
          {item.category}
        </h2>
      </div>
      <p className="flex flex-row gap-2 lg:mr-4 md:mr-4 mobile:mr-1 items-center">
        <span className="text-[#252631] font-bold">{item.score} </span>
        <span className="text-paragraph text-gray-400">/ 100</span>
      </p>
    </div>
  );
};

export default SummaryElement;
