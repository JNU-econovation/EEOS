"use client";

import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../common/LoadingSpinner";
import MemberListItem from "./MemberListItem.component";
import { getMembersByStatus } from "@/src/apis/member";
import { attendStatusLower } from "@/src/apis/types/member";

interface MemberListProps {
  programId: string;
  attendStatus: attendStatusLower;
}

const MemberList = ({ programId, attendStatus }: MemberListProps) => {
  const title = attendStatus === "attend" ? "참석자" : "불참자";
  const {
    data: members,
    isLoading,
    isError,
  } = useQuery(["memberDetailList", attendStatus], () =>
    getMembersByStatus(parseInt(programId), attendStatus),
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div className="w-custom my-4 flex  max-w-[300px] flex-col bg-background px-4 sm:max-w-[600px] lg:max-w-[900px]">
      <div className="flex justify-center border-b-[1.5px] border-stroke-light py-6">
        <span className="text-xl font-bold">{title}</span>
      </div>
      <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {members.map((member) => (
          <MemberListItem
            key={member.memberId}
            memberData={member}
            attendStatus={attendStatus}
          />
        ))}
      </div>
    </div>
  );
};
export default MemberList;
