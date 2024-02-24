"use client";

import classNames from "classnames";
import Image from "next/image";
import { MemberAttendStatusInfoDto } from "@/apis/dtos/member.dto";
import ATTEND_STATUS from "@/constants/ATTEND_STATUS";
import { AttendStatus } from "@/types/member";

const colors = {
  green: "bg-success-30",
  yellow: "bg-warning-20",
  red: "bg-action-20",
  gray: "bg-gray-20",
};

interface AttendeeStatusProps {
  status: AttendStatus;
  members: MemberAttendStatusInfoDto[];
}

const AttendeeStatus = ({ status, members }: AttendeeStatusProps) => {
  const { text, icon, color } = ATTEND_STATUS.LIST[status];
  const iconStyle = classNames(
    "flex h-fit w-fit items-center justify-center rounded-full p-1",
    colors[color],
  );

  return (
    <div className="flex items-end justify-between border-b-[1px] p-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">{text}</span>
        <div className={iconStyle}>
          <Image
            src={icon}
            alt="참석 상태 아이콘"
            width={18}
            height={18}
            className="h-[18px] w-[18px]"
          />
        </div>
      </div>
      <span className="text-stroke-60 text-sm">{members.length}명</span>
    </div>
  );
};
export default AttendeeStatus;
