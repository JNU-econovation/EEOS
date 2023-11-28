import AttendStatusBadge from "./AttendStatusBadge.component";
import { badgeOption } from "@/src/types/common/common";

interface AttendStatusSelectorProps {
  selectedValue: string;
  options: badgeOption[];
  onSelect: (value: string) => void;
}
const AttendStatusSelector = ({
  selectedValue,
  options,
  onSelect,
}: AttendStatusSelectorProps) => {
  const handleClick = (value: badgeOption) => {
    value.type !== selectedValue && onSelect(value.type);
  };

  return (
    <div className="flex h-fit w-fit transform rounded-3xl bg-gray-10 delay-300">
      {options.map((option) => (
        <div onClick={() => handleClick(option)}>
          <AttendStatusBadge
            key={option.text}
            text={option.text}
            color={selectedValue === option.type ? option.color : "gray"}
          />
        </div>
      ))}
    </div>
  );
};
export default AttendStatusSelector;
