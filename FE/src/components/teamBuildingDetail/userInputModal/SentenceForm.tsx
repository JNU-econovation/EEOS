import { create } from "domain";
import classNames from "classnames";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { FieldType } from "./SentenceField";
import Button from "@/components/common/Button";
import {
  usePostSentenceMutation,
  usePutSentenceMutation,
} from "@/hooks/query/useTeamBuildingQuery";

const color = {
  default: "border-gray-20",
  inputting: "border-gray-40 text-stroke-30",
  editing: "border-gray-40 text-stroke-30",
};

interface SentenceFormProps {
  content: string;
  setContent: Dispatch<SetStateAction<string>>;
  type: FieldType;
  setType: Dispatch<SetStateAction<FieldType>>;
}

const SentenceForm = ({
  content,
  setContent,
  type,
  setType,
}: SentenceFormProps) => {
  const textareaRef = useRef(null);
  const textareaStyle = classNames(
    "w-full resize-none overflow-hidden border-b-2 p-4 leading-relaxed outline-none",
    color[type],
  );

  useEffect(() => {
    handleResizeHeight();
  }, [content]);

  const { mutate: createSentence } = usePostSentenceMutation();
  const { mutate: editSentence } = usePutSentenceMutation();

  const handleResizeHeight = () => {
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleResizeHeight();
    setContent(e.target.value);

    if (e.target.value.length > 0 && type === "default") {
      setType("inputting");
    }
  };

  const handleReset = () => {
    if (type === "inputting") {
      setContent("");
      setType("default");
    }

    if (type === "editing") {
      setType("viewer");
    }
  };

  const handleSubmit = () => {
    if (content.length === 0) {
      toast.error("문장을 입력해주세요.");
      return;
    }
    if (type === "inputting") {
      createSentence({ content });
      setType("viewer");
    }
    if (type === "editing") {
      editSentence({ content });
      setType("viewer");
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      className="flex w-full flex-col items-end gap-4"
      onSubmit={handleFormSubmit}
    >
      <textarea
        maxLength={500}
        rows={1}
        ref={textareaRef}
        placeholder="문장을 입력해주세요."
        value={content}
        onChange={handleChange}
        className={textareaStyle}
        onKeyDown={handlePressEnter}
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
