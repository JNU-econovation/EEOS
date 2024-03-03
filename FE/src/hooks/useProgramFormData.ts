import { useState } from "react";
import { ProgramCategory, ProgramType } from "@/types/program";

export interface ProgramFormDataState {
  title: string;
  deadLine: string;
  type: ProgramType;
  category: ProgramCategory;
  content: string;
}

export interface ProgramFormDataAction {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDeadLine: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<ProgramType>>;
  setCategory: React.Dispatch<React.SetStateAction<ProgramCategory>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  reset: () => void;
}

const initialState: ProgramFormDataState = {
  title: "",
  deadLine: new Date().getTime().toString(),
  type: "notification",
  category: "weekly",
  content: "",
};

export interface ProgramFormData
  extends ProgramFormDataState,
    ProgramFormDataAction {}

const useProgramFormData = (
  defaultData: ProgramFormDataState = initialState,
) => {
  const [title, setTitle] = useState<string>(defaultData.title);
  const [deadLine, setDeadLine] = useState<string>(defaultData.deadLine);
  const [type, setType] = useState<ProgramType>(defaultData.type);
  const [category, setCategory] = useState<ProgramCategory>(
    defaultData.category,
  );
  const [content, setContent] = useState<string>(defaultData.content);

  const reset = () => {
    setTitle(defaultData.title);
    setDeadLine(defaultData.deadLine);
    setType(defaultData.type);
    setCategory(defaultData.category);
    setContent(defaultData.content);
  };

  return {
    title,
    setTitle,
    deadLine,
    setDeadLine,
    type,
    setType,
    category,
    setCategory,
    content,
    setContent,
    reset,
  };
};
export default useProgramFormData;
