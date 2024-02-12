import { MemberAttendStatusInfoDto } from "@/apis/dtos/member.dto";

interface MemberListItemProps {
  memberData: MemberAttendStatusInfoDto;
}

const MemberListItem = ({ memberData }: MemberListItemProps) => {
  const { name } = memberData;
  return (
    <div className="grid w-fit grid-cols-1 justify-items-center py-6 text-lg sm:px-9">
      <span>{name}</span>
    </div>
  );
};
export default MemberListItem;
