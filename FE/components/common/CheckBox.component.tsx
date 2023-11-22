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
  return (
    <div
      onClick={() => !disabled && onChange()}
      className={`flex justify-center items-center w-6 h-6 rounded border-2 transition duration-100 ${
        checked ? checkedClass : unCheckedClass
      } ${disabled && disabledClass}`}
    >
      {checked && (
        <Image src={"/icons/check.svg"} alt="check" width={24} height={24} />
      )}
    </div>
  );
};
export default CheckBox;
