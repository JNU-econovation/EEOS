import { FormType } from "@/types/form";
import CheckBox from "../CheckBox";
import { useAtom } from "jotai";
import { memberTableCheckedAtom } from "@/store/memberTableCheckedAtom";

interface MemberTableHeaderProps {
  formType: FormType;
  onClickCheckBox: (selected: boolean) => void;
}

const HEADER_TEXT = {
  create: ["활동 상태", "이름"],
  edit: ["활동 상태", "이름", "", "출석 상태"],
};

const MemberTableHeader = ({
  formType,
  onClickCheckBox,
}: MemberTableHeaderProps) => {
  const [checked, setChecked] = useAtom(memberTableCheckedAtom);

  const handleClickCheckBox = () => {
    onClickCheckBox(!checked);
    setChecked((prev) => !prev);
  };

  return (
    <div className="grid grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] justify-items-center gap-4 border-y-2 border-stroke-10 bg-gray-10 px-10 py-4 font-bold">
      {formType === "create" ? (
        <CheckBox checked={checked} onClick={handleClickCheckBox} />
      ) : (
        <span></span>
      )}
      {HEADER_TEXT[formType].map((text: string, index: number) => (
        <span key={index}>{text}</span>
      ))}
    </div>
  );
};
export default MemberTableHeader;
