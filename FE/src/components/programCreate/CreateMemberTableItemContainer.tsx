import { useGetMemberByActive } from "@/hooks/query/useMemberQuery";
import CreateMemberTableItem from "./CreateMemberTableItem";
import { ActiveStatusWithAll } from "@/types/member";
import { useQueryClient } from "@tanstack/react-query";
import MemberTableLoader from "../common/memberTable/MemberTable.loader";

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
  const { data: memberList, isLoading } = useGetMemberByActive(status);

  if (isLoading) return <MemberTableLoader />;

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
