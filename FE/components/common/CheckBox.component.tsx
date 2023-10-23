import classNames from "classnames";
import Image from "next/image";

interface CheckBoxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const checkedClass = "bg-blue-500 border-blue-500";
const unCheckedClass = "bg-background border-gray-base";
const disabledClass = "opacity-0 cursor-not-allowed";

const CheckBox = ({ checked, onChange, disabled = false }: CheckBoxProps) => {
  const checkboxClass = classNames(
    "flex h-6 w-6 items-center justify-center rounded border-2 transition duration-100",
    {
      [checkedClass]: checked,
      [unCheckedClass]: !checked,
      [disabledClass]: disabled,
    },
  );

  const handleChange = () => {
    if (!disabled) {
      onChange();
    }
  };

  return (
    <div onClick={handleChange} className={checkboxClass}>
      {checked && (
        <Image src={"/icons/check.svg"} alt="check" width={24} height={24} />
      )}
    </div>
  );
};
export default CheckBox;
