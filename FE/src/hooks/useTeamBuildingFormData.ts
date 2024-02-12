import { useState } from "react";

export interface TeamBuildingFormDataState {
  title: string;
  content: string;
  minTeamSize: number;
  maxTeamSize: number;
}
export interface TeamBuildingFormDataAction {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setMinTeamSize: React.Dispatch<React.SetStateAction<number>>;
  setMaxTeamSize: React.Dispatch<React.SetStateAction<number>>;
  reset: () => void;
}

const initialState: TeamBuildingFormDataState = {
  title: "",
  content: "",
  minTeamSize: 1,
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
  const [minTeamSize, setMinTeamSize] = useState<number>(
    defaultData.minTeamSize,
  );
  const [maxTeamSize, setMaxTeamSize] = useState<number>(
    defaultData.maxTeamSize,
  );

  const reset = () => {
    setTitle(defaultData.title);
    setContent(defaultData.content);
    setMinTeamSize(defaultData.minTeamSize);
    setMaxTeamSize(defaultData.maxTeamSize);
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    minTeamSize,
    setMinTeamSize,
    maxTeamSize,
    setMaxTeamSize,
    reset,
  };
};

export default useTeamBuildingFormData;
