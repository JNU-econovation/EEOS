"use client";

import { getDetailMembers } from "@/src/apis/member/member";
import { attendStatusLower } from "@/src/apis/types/member";
import { useQuery } from "@tanstack/react-query";
import MemberListItem from "./MemberListItem";

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
    getDetailMembers(parseInt(programId), attendStatus),
  );

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <div className="my-4 flex w-max_screen flex-col bg-background px-4">
      <div className="flex justify-center border-b-[1.5px] border-stroke-light py-6">
        <span className="text-xl font-bold">{title}</span>
      </div>
      <div className="grid w-full grid-cols-4">
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
