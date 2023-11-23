"use client";

import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import Image from "next/image";
import LoadingSpinner from "../common/LoadingSpinner";
import MemberListItem from "./MemberListItem.component";
import { getMembersByStatus } from "@/src/apis/member";
import { attendStatus } from "@/src/apis/types/member";
import ATTEND_STATUS from "@/src/constants/ATTEND_STATUS";

interface MemberListProps {
  programId: string;
  attendStatus: attendStatus;
}

const MemberList = ({ programId, attendStatus }: MemberListProps) => {
  const { text, color, icon } = ATTEND_STATUS.TITLE_STYLE[attendStatus];
  const iconClass = classNames(
    "flex items-center justify-center rounded-full p-1",
    color,
  );

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
    <div className="w-custom my-4 flex h-fit w-[300px] flex-col bg-background px-4 sm:w-[600px] lg:w-[900px]">
      <div className="flex items-center justify-between border-b-[1px] border-stroke-20 p-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">{text}</span>
          <div className={iconClass}>
            <Image src={icon} alt="참석 상태 색깔" width={18} height={18} />
          </div>
        </div>
        <span className="text-stroke-60 text-sm">{members.length}명</span>
      </div>
      <div className="grid w-full grid-cols-1 justify-items-center gap-x-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {members.map((member) => (
          <MemberListItem key={member.memberId} memberData={member} />
        ))}
      </div>
    </div>
  );
};
export default MemberList;
