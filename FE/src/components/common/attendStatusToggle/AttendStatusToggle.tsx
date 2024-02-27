import classNames from "classnames";
import StatusToggleItem from "./StatusToggleItem";
import ATTEND_STATUS, {
  AttendStatusToggleOption,
} from "@/constants/ATTEND_STATUS";
import { AttendStatus } from "@/types/member";

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

  const getItemColor = (type: AttendStatus, color: string) => {
    if (disabled) {
      return "gray";
    }
    return selectedValue === type ? color : "gray";
  };

  return (
    <div className={selectorStyle}>
      {options.map((option) => (
        <div onClick={() => handleClick(option)} key={option.text}>
          <StatusToggleItem
            text={option.text}
            color={getItemColor(option.type, option.color)}
          />
        </div>
      ))}
    </div>
  );
};
export default AttendStatusToggle;
