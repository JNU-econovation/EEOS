import LabeledInput from "./LabeledInput.component";
import FORM_INFO from "@/src/constants/FORM_INFO";

interface ProgramTitleAndDemandInputProps {
  title: string;
  setTitle: (title: string) => void;
  isDemand: boolean;
  setIsDemand: () => void;
}

const ProgramTitleAndDemandInput = ({
  title,
  setTitle,
  isDemand,
  setIsDemand,
}: ProgramTitleAndDemandInputProps) => {
  const handleCheck = () => {
    setIsDemand();
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-0 flex gap-2">
        <label className="text-sm font-bold">수요조사 등록하기</label>
        <input
          type="checkbox"
          className="accent-primary"
          checked={isDemand}
          onChange={handleCheck}
        />
      </div>
      <LabeledInput
        id={FORM_INFO.PROGRAM.TITLE.id}
        type={FORM_INFO.PROGRAM.TITLE.type}
        label={FORM_INFO.PROGRAM.TITLE.label}
        placeholder={FORM_INFO.PROGRAM.TITLE.placeholder}
        value={isDemand ? `[수요조사] ${title}` : title}
        onChange={(e) => setTitle(e.target.value.replace(/^\[수요조사\] /, ""))}
      />
    </div>
  );
};
export default ProgramTitleAndDemandInput;
