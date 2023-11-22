import { useRef, useState } from "react";

interface ToggleProps {
  active: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const activeClass = {
  line: "bg-primary",
  circle: "translate-x-6",
};

const unactiveClass = {
  line: "bg-gray-300",
  circle: "translate-x-1",
};
const disabledClass = "opacity-0";

const Toggle = ({ active, onChange, disabled = false }: ToggleProps) => {
  const toggleLine = useRef<HTMLButtonElement>(null);
  const toggleCircle = useRef<HTMLDivElement>(null);

  return (
    <button
      className={`w-12 h-7 rounded-full flex items-center transition duration-300 focus:outline-none shadow ${
        active ? activeClass.line : unactiveClass.line
      } ${disabled && disabledClass}`}
      onClick={() => !disabled && onChange()}
      ref={toggleLine}
    >
      <div
        ref={toggleCircle}
        id="switch-toggle"
        className={`w-5 h-5 relative rounded-full transition-transform duration-500 transform bg-white ${
          active ? activeClass.circle : unactiveClass.circle
        }`}
      ></div>
    </button>
  );
};
export default Toggle;
