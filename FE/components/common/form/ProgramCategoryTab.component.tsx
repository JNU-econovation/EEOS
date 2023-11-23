import CustomTabItem from "../CustomTabItem";

// FIXME: type & options 파일 분리하기
export type programCategory = "weekly" | "presidentTeam" | "eventTeam" | "etc";
const options: {
  text: string;
  type: programCategory;
}[] = [
  { text: "주간발표", type: "weekly" },
  { text: "회장단", type: "presidentTeam" },
  { text: "행사부", type: "eventTeam" },
  { text: "기타 행사", type: "etc" },
];

interface ProgramCategoryTabProps {
  selected: programCategory;
  onSelect: (value: programCategory) => void;
}

const ProgramCategoryTab = ({
  selected,
  onSelect,
}: ProgramCategoryTabProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">행사 카테고리</label>
      <div className="flex h-full gap-3">
        {options.map((option) => (
          <CustomTabItem
            text={option.text}
            size="md"
            rounded
            color={selected === option.type ? "yellow" : "gray"}
            onClick={() => onSelect(option.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramCategoryTab;
