import CustomTabItem from "../common/CustomTabItem";
import { TabColor } from "@/src/types/common/common";

interface ActiveStatusTabProps {
  selected: string;
  options: { text: string; type: string }[];
  onSelect: (selected: string) => void;
}

const ActiveStatusTab = ({
  selected,
  options,
  onSelect,
}: ActiveStatusTabProps) => {
  const getColor = (type: string): TabColor => {
    return type === selected ? "teal" : "gray";
  };

  return (
    <div className="flex w-52 flex-wrap items-center justify-center gap-3">
      {options.map((option) => (
        <CustomTabItem
          text={option.text}
          size="lg"
          color={getColor(option.type)}
          onClick={() => onSelect(option.type)}
        />
      ))}
    </div>
  );
};
export default ActiveStatusTab;
