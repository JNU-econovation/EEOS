import * as _ from "lodash";
import { getEditMembers } from "@/src/apis/member/member";
import { useQuery } from "@tanstack/react-query";
import EditMemberListItem from "./EditMemberListItem.component";
import { defaultMember } from "@/src/apis/types/member";

interface EditMemberListProps {
  programId: string;
}

const EditMemberList = ({ programId }: EditMemberListProps) => {
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery(["editEditMemberList", programId], () =>
    getEditMembers(programId)
  );

  if (isLoading) return <>로딩중...</>;
  if (isError) return <>에러...</>;

  return (
    <>
      <h2 className="text-2xl font-bold w-full mt-32 px-2 pt-8 pb-4 border-t-2">
        참석자 수정
      </h2>
      <div className="w-full shadow-lg mt-4 mb-10">
        <div className="grid grid-cols-[4.5rem_6.75rem_1fr_4rem] gap-4 px-10 py-3 bg-secondary text-sm">
          <span>해당</span>
          <span>이름</span>
          <span>기수</span>
          <span>참석 여부</span>
        </div>
        {members.map((member) => (
          <EditMemberListItem key={member.memberId} data={member} />
        ))}
      </div>
    </>
  );
};
export default EditMemberList;
