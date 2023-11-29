"use client";

import { useState } from "react";
import AttendStatusSelector from "../attendStatus/AttendStatusSelector.component";
import CheckBox from "../CheckBox.component";
import ATTEND_STATUS from "@/src/constants/ATTEND_STATUS";
import { badgeOption } from "@/src/types/common/common";
import { MemberInfo } from "@/src/types/member";

export const attendStatusList: badgeOption[] = ATTEND_STATUS.BADGE_STYLE.filter(
  (style) => style.type !== "nonRelated" && style.type !== "nonResponse",
);

interface MemberTableItemProps {
  data: MemberInfo;
  isEdit: boolean;
  setMemberList: () => void;
}

const MemberTableItem = ({
  data,
  isEdit,
  setMemberList,
}: MemberTableItemProps) => {
  const { memberId, name, activeStatus } = data;
  const [isRelated, setIsRelated] = useState(
    data.attendStatus !== "nonRelated",
  );

  const [selectedAttendStatus, setSelectedAttendStatus] = useState<string>(
    data.attendStatus,
  );

  const handleCheckBoxChange = () => {
    setIsRelated((prev) => !prev);
  };

  const handleChangeAttendStatus = (value: string) => {
    setSelectedAttendStatus(value);
    setMemberList();
    console.log(memberId);
  };

  return (
    <div className="grid h-20 grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10">
      <CheckBox checked={isRelated} onChange={handleCheckBoxChange} />
      <span>{activeStatus}</span>
      <span className="font-bold">{name}</span>
      <span></span>
      {isEdit && (
        <AttendStatusSelector
          selectedValue={selectedAttendStatus}
          options={attendStatusList}
          onSelect={handleChangeAttendStatus}
        />
      )}
    </div>
  );
};
export default MemberTableItem;
