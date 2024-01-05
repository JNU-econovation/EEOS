import { useGetProgramMembersByActive } from "@/hooks/query/useMemberQuery";
import { ActiveStatusWithAll, AttendStatus } from "@/types/member";
import EditMemberTableItem from "./EditMemberTableItem";
import { Members } from "./ProgramEditForm";

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
  const {
    data: memberList,
    isLoading,
    isError,
  } = useGetProgramMembersByActive({
    programId,
    status,
  });

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

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
