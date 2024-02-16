import { SimpleMemberInfo } from "@/types/member";
import MemberList from "./MemberList";
import TeamResultInfoHeader from "./TeamResultInfoHeader";

interface TeamResultInfoProps {
  index: number;
  members: SimpleMemberInfo[];
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
