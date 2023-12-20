import { useGetMemberByActive } from "@/hooks/query/useMemberQuery";
import CreateMemberTableItem from "./CreateMemberTableItem";
import { ActiveStatusWithAll } from "@/types/member";

interface CreateMemberTableItemContainerProps {
  members: Set<number>;
  setMembers: (members: Set<number>) => void;
  status: ActiveStatusWithAll;
}

const CreateMemberTableItemContainer = ({
  members,
  setMembers,
  status,
}: CreateMemberTableItemContainerProps) => {
  const { data: memberList, isLoading, isError } = useGetMemberByActive(status);

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <>
      {memberList.map((member) => (
        <CreateMemberTableItem
          key={member.memberId}
          data={member}
          members={members}
          setMembers={setMembers}
        />
      ))}
    </>
  );
};

export default CreateMemberTableItemContainer;
