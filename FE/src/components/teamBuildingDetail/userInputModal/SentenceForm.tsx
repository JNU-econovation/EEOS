import Button from "@/components/common/Button";
import FormBtn from "@/components/common/form/FormBtn";
import classNames from "classnames";
import { Dispatch, SetStateAction, useRef } from "react";

const color = {
  default: "border-gray-20",
  inputting: "border-gray-40 text-stroke-30",
  editing: "border-gray-40 text-stroke-30",
};

interface SentenceFormProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  type: "default" | "inputting" | "editing";
  setType: Dispatch<
    SetStateAction<"default" | "inputting" | "editing" | "viewer">
  >;
}

const SentenceForm = ({
  content,
  setContent,
  type,
  setType,
}: SentenceFormProps) => {
  const textareaRef = useRef(null);

  const handleResizeHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleResizeHeight();
    setContent(e.target.value);
    if (e.target.value.length === 0 && type === "inputting") {
      setType("default");
      return;
    }
    if (e.target.value.length > 0 && type === "default") {
      setType("inputting");
      return;
    }
    console.log(e.target.value.length, type);
  };

  const textareaStyle = classNames(
    "w-full resize-none overflow-hidden border-b-2 p-4 leading-relaxed outline-none",
    color[type],
  );

  const handleReset = () => {
    if (type === "inputting") {
      setContent("");
      setType("default");
    }
    if (type === "editing") {
      setType("viewer");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (type === "inputting") {
      console.log("submit");
      setType("viewer");
    }
    if (type === "editing") {
      setType("viewer");
    }
  };

  return (
    <form
      className="flex w-full flex-col items-end gap-4"
      onSubmit={handleSubmit}
    >
      <textarea
        rows={1}
        ref={textareaRef}
        placeholder="문장을 입력해주세요."
        value={content}
        onChange={handleChange}
        className={textareaStyle}
      />
      {type !== "default" && <Buttons formReset={handleReset} />}
    </form>
  );
};

const Buttons = ({ formReset }: { formReset: () => void }) => {
  return (
    <div className="flex gap-4">
      <Button color="white" size="sm" onClick={formReset}>
        취소
      </Button>
      <Button color="primary" size="sm" type="submit">
        완료
      </Button>
    </div>
  );
};

export default SentenceForm;
