import CustomTabItem from "../CustomTabItem";

interface MarkdownEditorTabProps {
  viewType: "write" | "preview";
  setViewType: (viewType: "write" | "preview") => void;
}

const MarkdownEditorTab = ({
  viewType,
  setViewType,
}: MarkdownEditorTabProps) => {
  return (
    <div className="flex gap-2">
      <CustomTabItem
        text="작성"
        size="sm"
        color={viewType === "write" ? "navy" : "white"}
        onClick={() => setViewType("write")}
      />
      <CustomTabItem
        text="미리보기"
        size="sm"
        color={viewType === "preview" ? "navy" : "white"}
        onClick={() => setViewType("preview")}
      />
    </div>
  );
};

export default MarkdownEditorTab;
