import CustomToggleItem from "./CustomToggleItem.component";
import { toggleOption } from "@/src/types/common/common";

interface MultiToggleProps {
  selectedValue: string;
  options: toggleOption[];
  onSelect: (value: string) => void;
}
const MultiToggle = ({
  selectedValue,
  options,
  onSelect,
}: MultiToggleProps) => {
  const handleClick = (value: toggleOption) => {
    value.text !== selectedValue && onSelect(value.text);
  };

  return (
    <div className="flex h-fit w-fit transform rounded-3xl bg-gray-10 delay-300">
      {options.map((option) => (
        <div onClick={() => handleClick(option)}>
          <CustomToggleItem
            key={option.text}
            text={option.text}
            color={selectedValue === option.text ? option.color : "default"}
          />
        </div>
      ))}
    </div>
  );
};
export default MultiToggle;
