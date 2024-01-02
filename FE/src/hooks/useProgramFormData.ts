import { ProgramCategory, ProgramType } from "@/types/program";
import { useEffect, useState } from "react";
import { useGetProgramById } from "./query/useProgramQuery";

export interface ProgramFormDataState {
  title: string;
  deadLine: string;
  type: ProgramType;
  category: ProgramCategory;
  content: string;
  // members: Set<number>;
}

export interface ProgramFormDataAction {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDeadLine: React.Dispatch<React.SetStateAction<string>>;
  setType: React.Dispatch<React.SetStateAction<ProgramType>>;
  setCategory: React.Dispatch<React.SetStateAction<ProgramCategory>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  // setMembers: React.Dispatch<React.SetStateAction<Set<number>>>;
  reset: () => void;
}

const initalState: ProgramFormDataState = {
  title: "",
  deadLine: new Date().getTime().toString(),
  type: "notification",
  category: "weekly",
  content: "",
  // members: new Set<number>(),
};

export interface ProgramFormData
  extends ProgramFormDataState,
    ProgramFormDataAction {}

const useProgramFormData = (
  defaultData: ProgramFormDataState = initalState,
) => {
  const [title, setTitle] = useState<string>(defaultData.title);
  const [deadLine, setDeadLine] = useState<string>(defaultData.deadLine);
  const [type, setType] = useState<ProgramType>(defaultData.type);
  const [category, setCategory] = useState<ProgramCategory>(
    defaultData.category,
  );
  const [content, setContent] = useState<string>(defaultData.content);
  // const [members, setMembers] = useState<Set<number>>(defaultData.members);

  const reset = () => {
    setTitle(defaultData.title);
    setDeadLine(defaultData.deadLine);
    setType(defaultData.type);
    setCategory(defaultData.category);
    setContent(defaultData.content);
    // setMembers(defaultData.members);
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
    // members,
    // setMembers,
    reset,
  };
};
export default useProgramFormData;
