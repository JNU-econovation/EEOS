import CustomTabItem from "../CustomTabItem";

interface ActiveStatusTabProps {
  selected: string;
  options: { text: string; type: string }[];
  onSelect: (value: string) => void;
}

const ActiveStatusTab = ({
  selected,
  options,
  onSelect,
}: ActiveStatusTabProps) => {
  return (
    <div className="flex gap-3">
      {options.map((option) => (
        <CustomTabItem
          text={option.text}
          size="lg"
          color={selected === option.type ? "teal" : "gray"}
          onClick={() => onSelect(option.type)}
        />
      ))}
    </div>
  );
};
export default ActiveStatusTab;
