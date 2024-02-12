import classNames from "classnames";
import Image from "next/image";

interface CheckBoxProps {
  checked: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const CheckBox = ({ checked, onClick, disabled = false }: CheckBoxProps) => {
  const checkboxClass = classNames(
    "flex h-6 w-6 items-center justify-center rounded border-2 transition duration-100",
    checked ? "border-blue-500 bg-blue-500" : "border-gray-20 bg-background",
    {
      "cursor-not-allowed opacity-0": disabled,
    },
  );

  const handleCheckBoxClick = () => {
    !disabled && onClick();
  };

  return (
    <div onClick={handleCheckBoxClick} className={checkboxClass}>
      {checked && (
        <Image src={"/icons/check.svg"} alt="check" width={24} height={24} />
      )}
    </div>
  );
};
export default CheckBox;
