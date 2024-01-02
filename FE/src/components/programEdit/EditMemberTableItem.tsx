import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import CheckBox from "../common/CheckBox";
import AttendStatusToggle from "../common/attendStatusToggle/AttendStatusToggle";
import { useState } from "react";
import { AttendStatus } from "@/types/member";

const EditMemberTableItem = ({
  memberId,
  name,
  activeStatus,
  initAttendStatus,
  members,
  setMembers,
}) => {
  const [selectedAttend, setSelectedAttend] =
    useState<AttendStatus>(initAttendStatus);
  const isRelated = selectedAttend !== "nonResponse";

  const handleCheckBoxChange = () => {
    const afterAttendStatus =
      selectedAttend === "nonResponse" ? initAttendStatus : "nonResponse";
    setSelectedAttend(afterAttendStatus);
    setMembers(memberId, initAttendStatus, afterAttendStatus);
  };

  const handleAttendStatusChange = (value: AttendStatus) => {
    setSelectedAttend(value);
    setMembers(memberId, initAttendStatus, value);
  };

  return (
    <div className="grid h-20 grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10">
      <CheckBox checked={isRelated} onClick={handleCheckBoxChange} />
      <span>{ACTIVE_STATUS.TAB[activeStatus].text}</span>
      <span className="font-bold">{name}</span>
      <span></span>
      <AttendStatusToggle
        disabled={!isRelated}
        selectedValue={selectedAttend}
        onSelect={handleAttendStatusChange}
      />
    </div>
  );
};
export default EditMemberTableItem;
