import FORM_INFO from "@/constants/FORM_INFO";
import LabeledInput from "../LabeledInput";

interface TeamBuildingMinTeamSizeProps {
  minTeamSize: number;
  setMinTeamSize: (v: number) => void;
}

const TeamBuildingMinTeamSize = ({
  minTeamSize,
  setMinTeamSize,
}: TeamBuildingMinTeamSizeProps) => {
  const handleMinTeamSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) <= 0) {
      return;
    }
    setMinTeamSize(parseInt(e.target.value));
  };

  return (
    <LabeledInput
      id={FORM_INFO.TEAM_BUILDING.MIN_TEAM_SIZE.id}
      type={FORM_INFO.TEAM_BUILDING.MIN_TEAM_SIZE.type}
      label={FORM_INFO.TEAM_BUILDING.MIN_TEAM_SIZE.label}
      placeholder={FORM_INFO.TEAM_BUILDING.MIN_TEAM_SIZE.placeholder}
      value={minTeamSize}
      onChange={handleMinTeamSizeChange}
    />
  );
};

export default TeamBuildingMinTeamSize;
