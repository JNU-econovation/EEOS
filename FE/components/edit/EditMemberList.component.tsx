"use client";

import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../common/LoadingSpinner";
import EditMemberListItem from "./EditMemberListItem.component";
import { getEditMembers } from "@/src/apis/member/member";

interface EditMemberListProps {
  programId: string;
}

const EditMemberList = ({ programId }: EditMemberListProps) => {
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery(["editEditMemberList", programId], () =>
    getEditMembers(programId),
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <>에러...</>;

  return (
    <>
      <h2 className="mt-32 w-full border-t-2 px-2 pb-4 pt-8 text-2xl font-bold">
        참석자 수정
      </h2>
      <div className="mb-10 mt-4 w-full shadow-lg">
        <div className="grid grid-cols-[4.5rem_6.75rem_1fr_4rem] gap-4 bg-secondary px-10 py-3 text-sm">
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
