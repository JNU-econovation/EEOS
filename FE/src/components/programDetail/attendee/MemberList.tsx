import { MemberAttendStatusInfoDto } from "@/apis/dtos/member.dto";
import MemberListItem from "./MemberListItem";

interface MemberListProps {
  members: MemberAttendStatusInfoDto[];
}

const MemberList = ({ members }: MemberListProps) => {
  return (
    <div className="grid w-full auto-cols-auto justify-items-center gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <MemberListItem key={member.memberId} memberData={member} />
      ))}
    </div>
  );
};
export default MemberList;
