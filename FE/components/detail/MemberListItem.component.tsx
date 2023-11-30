import { defaultMember } from "@/src/apis/types/member";

interface MemberListItemProps {
  memberData: defaultMember;
}

const MemberListItem = ({ memberData }: MemberListItemProps) => {
  const { name } = memberData;
  return (
    <div className="grid w-fit grid-cols-1 justify-items-center px-9 py-6 text-lg">
      <span>25기 {name}</span>
    </div>
  );
};
export default MemberListItem;
