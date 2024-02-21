import { Dispatch, SetStateAction } from "react";

interface SentenceViewerProps {
  content: string;
  setType: Dispatch<SetStateAction<"editing">>;
}

const SentenceViewer = ({ content, setType }: SentenceViewerProps) => {
  const handleButtonClick = () => {
    setType("editing");
  };

  return (
    <div className="flex w-full flex-col items-end gap-4">
      <p className="w-full break-words text-left text-lg text-stroke-30">
        {content}
      </p>
      <button className="text-gray-30" onClick={handleButtonClick}>
        수정
      </button>
    </div>
  );
};

export default SentenceViewer;
