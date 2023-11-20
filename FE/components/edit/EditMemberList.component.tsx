"use client";

import { useQuery } from "@tanstack/react-query";
import CheckBox from "../common/CheckBox.component";
import LoadingSpinner from "../common/LoadingSpinner";
import EditMemberListItem from "./EditMemberListItem.component";
import { getAllMembers } from "@/src/apis/member";

interface EditMemberListProps {
  programId: string;
}

const EditMemberList = ({ programId }: EditMemberListProps) => {
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery(["editEditMemberList", programId], () =>
    getAllMembers(programId),
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <>에러...</>;

  return (
    <>
      <div className="mb-10 mt-4 w-full shadow-lg">
        <div className="grid grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] justify-items-center gap-4 border-y-2 border-stroke-10 bg-gray-10 px-10 py-4 font-bold">
          <CheckBox checked={true} onChange={() => {}} />
          <span>상태</span>
          <span>이름</span>
          <span></span>
          <span>참석 여부</span>
        </div>
        {members.map((member) => (
          <EditMemberListItem
            key={member.memberId}
            data={member}
            programId={programId}
          />
        ))}
      </div>
    </>
  );
};
export default EditMemberList;
