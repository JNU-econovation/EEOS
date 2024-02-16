import MemberList from "./MemberList";
import TeamResultInfoHeader from "./TeamResultInfoHeader";

interface TeamResultInfoProps {
  index: number;
  members: { name: string }[];
}

const TeamResultInfo = ({ index, members }: TeamResultInfoProps) => {
  return (
    <div className="h-fit space-y-4">
      <TeamResultInfoHeader index={index} />
      <MemberList members={members} />
    </div>
  );
};
export default TeamResultInfo;
