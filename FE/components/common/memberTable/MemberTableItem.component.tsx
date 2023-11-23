"use client";

import { useState } from "react";
import AttendStatusSelector from "../attendStatus/AttendStatusSelector.component";
import CheckBox from "../CheckBox.component";
import { attendStatus, defaultMember } from "@/src/apis/types/member";
import ATTEND_STATUS from "@/src/constants/ATTEND_STATUS";
import { badgeOption } from "@/src/types/common/common";

export const attendStatusList: badgeOption[] = [
  ATTEND_STATUS.BADGE_STYLE.attend,
  ATTEND_STATUS.BADGE_STYLE.perceive,
  ATTEND_STATUS.BADGE_STYLE.absent,
];

interface MemberTableItemProps {
  data: defaultMember;
  isEdit: boolean;
  setMemberList: () => void;
}

const MemberTableItem = ({
  data,
  isEdit,
  setMemberList,
}: MemberTableItemProps) => {
  const { memberId, name, generation } = data;
  const [isRelated, setIsRelated] = useState(
    data.attendStatus !== "nonRelated",
  );
  const [selectedAttendStatus, setSelectedAttendStatus] =
    useState<attendStatus>(data.attendStatus);

  const handleCheckBoxChange = () => {
    setIsRelated((prev) => !prev);
  };
  const handleSelectChange = (value: string) => {
    if (typeof value === "string") return;
    setSelectedAttendStatus(value);
    console.log(memberId);
    setMemberList();
  };

  return (
    <div className="grid h-20 grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10">
      <CheckBox checked={isRelated} onChange={handleCheckBoxChange} />
      <span>{generation}</span>
      <span className="font-bold">{name}</span>
      <span></span>
      {isEdit && (
        <AttendStatusSelector
          selectedValue={selectedAttendStatus}
          options={attendStatusList}
          onSelect={handleSelectChange}
        />
      )}
    </div>
  );
};
export default MemberTableItem;
