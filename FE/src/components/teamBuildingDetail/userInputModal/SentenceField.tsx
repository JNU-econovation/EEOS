"use client";

import { useState } from "react";
import SentenceViewer from "./SentenceViewer";
import SentenceForm from "./SentenceForm";

interface SentenceFieldProps {
  inputStatus: "incomplete" | "complete";
}

const getType = (inputStatus: "incomplete" | "complete") => {
  if (inputStatus === "incomplete") return "default";
  if (inputStatus === "complete") return "viewer";
};

const SentenceField = ({ inputStatus }: SentenceFieldProps) => {
  const [content, setContent] = useState<string>("");
  const [type, setType] = useState<
    "default" | "inputting" | "editing" | "viewer"
  >(getType(inputStatus));

  return (
    <div className="w-[80%] max-w-[60rem]">
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
