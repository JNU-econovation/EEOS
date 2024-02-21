"use client";

import { useState } from "react";
import SentenceViewer from "./SentenceViewer";
import SentenceForm from "./SentenceForm";
import { InputStatus } from "@/types/teamBuilding";

export type FieldType = "default" | "inputting" | "editing" | "viewer";
interface SentenceFieldProps {
  inputStatus: InputStatus;
}

const getType = (inputStatus: InputStatus) => {
  if (inputStatus === "incomplete") return "default";
  if (inputStatus === "complete") return "viewer";
};

const SentenceField = ({ inputStatus }: SentenceFieldProps) => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<FieldType>(getType(inputStatus));

  return (
    <div className="mb-8 min-h-[7rem] w-[80%] max-w-[60rem]">
      {type === "viewer" ? (
        <SentenceViewer content={content} setType={setType} />
      ) : (
        <SentenceForm
          content={content}
          setContent={setContent}
          type={type}
          setType={setType}
        />
      )}
    </div>
  );
};

export default SentenceField;
