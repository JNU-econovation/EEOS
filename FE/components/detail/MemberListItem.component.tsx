import { defaultMember } from "@/src/apis/types/member";

interface MemberListItemProps {
  memberData: defaultMember;
}

// TODO: MemberListItem 바뀐 디자인 적용
const MemberListItem = ({ memberData }: MemberListItemProps) => {
  const { name } = memberData;
  return (
    <div className="grid w-full grid-cols-1 justify-items-center px-9 py-6 text-lg">
      <span>{name}</span>
    </div>
  );
};
export default MemberListItem;
