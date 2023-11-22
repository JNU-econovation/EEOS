import AttendStatusBadge from "./AttendStatusBadge.component";
import { toggleOption } from "@/src/types/common/common";

interface AttendStatusSelectorProps {
  selectedValue: string;
  options: toggleOption[];
  onSelect: (value: string) => void;
}
const AttendStatusSelector = ({
  selectedValue,
  options,
  onSelect,
}: AttendStatusSelectorProps) => {
  const handleClick = (value: toggleOption) => {
    value.text !== selectedValue && onSelect(value.text);
  };

  return (
    <div className="flex h-fit w-fit transform rounded-3xl bg-gray-10 delay-300">
      {options.map((option) => (
        <div onClick={() => handleClick(option)}>
          <AttendStatusBadge
            key={option.text}
            text={option.text}
            color={selectedValue === option.text ? option.color : "gray"}
          />
        </div>
      ))}
    </div>
  );
};
export default AttendStatusSelector;
