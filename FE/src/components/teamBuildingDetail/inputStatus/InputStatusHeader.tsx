"use client";

import classNames from "classnames";
import Image from "next/image";
import INPUT_STATUS from "@/constants/INPUT_STATUS";
import { SimpleMemberInfo } from "@/types/member";
import { InputStatus } from "@/types/teamBuilding";

const colors = {
  green: "bg-success-30",
  gray: "bg-gray-20",
};

interface InputStatusHeaderProps {
  status: InputStatus;
  members: SimpleMemberInfo[];
}

const InputStatusHeader = ({ status, members }: InputStatusHeaderProps) => {
  const { text, icon, color } = INPUT_STATUS.LIST[status];
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
export default InputStatusHeader;
