import CheckBox from "../CheckBox.component";
import ActiveStatusTab from "./ActiveStatusTab.component";
import MemberTableItem from "./MemberTableItem.component";
import { defaultMember } from "@/src/apis/types/member";

interface MemberTableProps {
  members: defaultMember[];
  isEdit: boolean;
}

const MemberTable = ({ members, isEdit }: MemberTableProps) => {
  return (
    <div className="mt-12 flex w-full flex-col gap-6">
      <ActiveStatusTab />
      <div>
        <div className="grid grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] justify-items-center gap-4 border-y-2 border-stroke-10 bg-gray-10 px-10 py-4 font-bold">
          <CheckBox checked={true} onChange={() => {}} />
          <span>상태</span>
          <span>이름</span>
          <span></span>
          <span>참석 여부</span>
        </div>
        {members.map((member) => (
          <MemberTableItem
            key={member.memberId}
            data={member}
            isEdit={isEdit}
            setMemberList={() => {}}
          />
        ))}
      </div>
    </div>
  );
};
export default MemberTable;
