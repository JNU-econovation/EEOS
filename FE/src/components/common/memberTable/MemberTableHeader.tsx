import { FormType } from "@/types/form";
import CheckBox from "../CheckBox";

interface MemberTableHeaderProps {
  formType: FormType;
  checked: boolean;
  onClickCheckBox: () => void;
}

const HEADER_TEXT = {
  create: ["활동 상태", "이름"],
  edit: ["활동 상태", "이름", "", "출석 상태"],
};

const MemberTableHeader = ({
  formType,
  checked,
  onClickCheckBox,
}: MemberTableHeaderProps) => {
  return (
    <div className="grid grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] justify-items-center gap-4 border-y-2 border-stroke-10 bg-gray-10 px-10 py-4 font-bold">
      <CheckBox checked={checked} onClick={() => onClickCheckBox()} />
      {HEADER_TEXT[formType].map((text: string, index: number) => (
        <span key={index}>{text}</span>
      ))}
    </div>
  );
};
export default MemberTableHeader;
