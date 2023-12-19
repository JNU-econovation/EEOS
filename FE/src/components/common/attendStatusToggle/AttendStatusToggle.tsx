import classNames from "classnames";
import AttendStatusToggleItem from "./AttendStatusToggleItem";
import { AttendStatus } from "@/types/member";
import ATTEND_STATUS, {
  AttendStatusToggleOption,
} from "@/constants/ATTEND_STATUS";

interface AttendStatusToggleProps {
  selectedValue: AttendStatus;
  onSelect: (value: AttendStatus) => void;
  disabled?: boolean;
}
const AttendStatusToggle = ({
  selectedValue,
  onSelect,
  disabled,
}: AttendStatusToggleProps) => {
  const options = Object.values(ATTEND_STATUS.TOGGLE);
  const handleClick = (value: AttendStatusToggleOption) => {
    !disabled && value.type !== selectedValue && onSelect(value.type);
  };

  const selectorStyle = classNames(
    "flex h-fit w-fit transform rounded-3xl bg-gray-10",
    {
      "opacity-30": disabled,
    },
  );

  return (
    <div className={selectorStyle}>
      {options.map((option) => (
        <div onClick={() => handleClick(option)} key={option.text}>
          <AttendStatusToggleItem
            text={option.text}
            color={selectedValue === option.type ? option.color : "gray"}
          />
        </div>
      ))}
    </div>
  );
};
export default AttendStatusToggle;
