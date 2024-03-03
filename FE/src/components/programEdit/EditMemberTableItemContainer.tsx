"use client";

import MemberTableLoader from "../common/memberTable/MemberTable.loader";
import EditMemberTableItem from "./EditMemberTableItem";
import { useGetProgramMembersByActive } from "@/hooks/query/useMemberQuery";
import { ActiveStatusWithAll, AttendStatus } from "@/types/member";

interface EditMemberTableItemContainerProps {
  setMembers: (
    memberId: number,
    before: AttendStatus,
    after: AttendStatus,
  ) => void;
  status: ActiveStatusWithAll;
  programId: number;
  isEditable?: boolean;
}

const EditMemberTableItemContainer = ({
  setMembers,
  programId,
  status,
  isEditable = true,
}: EditMemberTableItemContainerProps) => {
  const { data: memberList, isLoading } = useGetProgramMembersByActive({
    programId,
    status,
  });

  if (isLoading) return <MemberTableLoader />;

  return (
    <>
      {memberList.map((member) => (
        <EditMemberTableItem
          key={member.memberId}
          memberId={member.memberId}
          name={member.name}
          activeStatus={member.activeStatus}
          initAttendStatus={member.attendStatus}
          setMembers={setMembers}
          isEditable={isEditable}
        />
      ))}
    </>
  );
};
export default EditMemberTableItemContainer;
