import { useState } from "react";

export interface TeamBuildingFormDataState {
  title: string;
  content: string;
  maxTeamSize: number;
}
export interface TeamBuildingFormDataAction {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setMaxTeamSize: React.Dispatch<React.SetStateAction<number>>;
  reset: () => void;
}

const initialState: TeamBuildingFormDataState = {
  title: "",
  content: "",
  maxTeamSize: 1,
};

export interface TeamBuildingFormData
  extends TeamBuildingFormDataState,
    TeamBuildingFormDataAction {}

const useTeamBuildingFormData = (
  defaultData: TeamBuildingFormDataState = initialState,
) => {
  const [title, setTitle] = useState<string>(defaultData.title);
  const [content, setContent] = useState<string>(defaultData.content);

  const [maxTeamSize, setMaxTeamSize] = useState<number>(
    defaultData.maxTeamSize,
  );

  const reset = () => {
    setTitle(defaultData.title);
    setContent(defaultData.content);
    setMaxTeamSize(defaultData.maxTeamSize);
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    maxTeamSize,
    setMaxTeamSize,
    reset,
  };
};

export default useTeamBuildingFormData;
