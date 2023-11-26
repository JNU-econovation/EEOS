import classNames from "classnames";

interface ToggleProps {
  active: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const Toggle = ({ active, onChange, disabled = false }: ToggleProps) => {
  const toggleLineClass = classNames(
    "flex h-7 w-12 items-center rounded-full shadow transition duration-300 focus:outline-none",
    {
      "bg-primary": active,
      "bg-gray-300": !active,
      "opacity-0": disabled,
    },
  );
  const toggleCircleClass = classNames(
    "relative h-5 w-5 transform rounded-full bg-white transition-transform duration-500",
    {
      "translate-x-6": active,
      "translate-x-1": !active,
    },
  );

  const handleToggleClick = () => {
    !disabled && onChange();
  };

  return (
    <button className={toggleLineClass} onClick={handleToggleClick}>
      <div className={toggleCircleClass}></div>
    </button>
  );
};
export default Toggle;
