import CustomTabItem from "../common/CustomTabItem";

interface ProgramCategoryTabProps {
  selected: string;
  options: { text: string; type: string }[];
  onSelect: (value: string) => void;
}

const ProgramCategoryTab = ({
  selected,
  options,
  onSelect,
}: ProgramCategoryTabProps) => {
  return (
    <div className="mb-4 flex w-full gap-4">
      {options.map((option) => (
        <CustomTabItem
          text={option.text}
          size="lg"
          rounded
          color={selected === option.type ? "navy" : "white"}
          onClick={() => onSelect(option.type)}
        />
      ))}
    </div>
  );
};
export default ProgramCategoryTab;
