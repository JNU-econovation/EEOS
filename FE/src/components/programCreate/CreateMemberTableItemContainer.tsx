import { useGetMemberByActive } from "@/hooks/query/useMemberQuery";
import CreateMemberTableItem from "./CreateMemberTableItem";
import { ActiveStatusWithAll } from "@/types/member";
import { useQueryClient } from "@tanstack/react-query";

interface CreateMemberTableItemContainerProps {
  members: Set<number>;
  setMembers: (memberId: number) => void;
  status: ActiveStatusWithAll;
}

const CreateMemberTableItemContainer = ({
  members,
  setMembers,
  status,
}: CreateMemberTableItemContainerProps) => {
  const queryClient = useQueryClient();
  const { data: memberList, isLoading, isError } = useGetMemberByActive(status);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  queryClient.setQueryData(
    ["memberIdList"],
    memberList.map((v) => v.memberId),
  );

  return (
    <>
      {memberList.map((member) => (
        <CreateMemberTableItem
          key={member.memberId}
          memberId={member.memberId}
          name={member.name}
          activeStatus={member.activeStatus}
          members={members}
          setMembers={setMembers}
        />
      ))}
    </>
  );
};

export default CreateMemberTableItemContainer;
