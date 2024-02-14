import StatusToggleItem from "@/components/common/attendStatusToggle/StatusToggleItem";
import INPUT_STATUS, { InputStatus } from "@/constants/INPUT_STATUS";

interface InputStatusViewProps {
  name: string;
  inputStatus: InputStatus;
}

const InputStatusView = ({ name, inputStatus }: InputStatusViewProps) => {
  const { text, color } = INPUT_STATUS.TOGGLE[inputStatus];

  return (
    <div className="mb-4 flex items-center gap-4">
      <p className="text-lg font-semibold">{name}</p>
      <StatusToggleItem text={text} color={color} />
    </div>
  );
};
export default InputStatusView;
