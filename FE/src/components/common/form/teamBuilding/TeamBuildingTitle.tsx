import FORM_INFO from "@/constants/FORM_INFO";
import LabeledInput from "../LabeledInput";
import { Dispatch, SetStateAction } from "react";

interface TeamBuildingTitleProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
}

const TeamBuildingTitle = ({ title, setTitle }: TeamBuildingTitleProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <LabeledInput
      id={FORM_INFO.TEAM_BUILDING.TITLE.id}
      type={FORM_INFO.TEAM_BUILDING.TITLE.type}
      label={FORM_INFO.TEAM_BUILDING.TITLE.label}
      placeholder={FORM_INFO.TEAM_BUILDING.TITLE.placeholder}
      value={title}
      onChange={handleTitleChange}
    />
  );
};

export default TeamBuildingTitle;
