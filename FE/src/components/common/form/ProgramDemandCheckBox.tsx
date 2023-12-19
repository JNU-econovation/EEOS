"use client";

interface ProgramDemandCheckBoxProps {
  disabled: boolean;
  isDemand: boolean;
  onClick: (v: boolean) => void;
}

const ProgramDemandCheckBox = ({
  disabled,
  isDemand,
  onClick,
}: ProgramDemandCheckBoxProps) => {
  return (
    <>
      {!disabled && (
        <div className="absolute right-0 top-0 flex gap-2">
          <label className="text-sm font-bold">수요조사 등록하기</label>
          {/* TODO: Checkbox 컴포넌트로 변경 */}
          <input
            type="checkbox"
            className="accent-primary"
            checked={isDemand}
            onChange={() => onClick(!isDemand)}
          />
        </div>
      )}
    </>
  );
};
export default ProgramDemandCheckBox;
