import classNames from "classnames";
import { useState } from "react";
import { toast } from "react-toastify";
import AttendStatusToggle from "../common/attendStatusToggle/AttendStatusToggle";
import CheckBox from "../common/CheckBox";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import MESSAGE from "@/constants/MESSAGE";
import { AttendStatus } from "@/types/member";

interface EditMemberTableItemProps {
  memberId: number;
  name: string;
  activeStatus: AttendStatus;
  initAttendStatus: AttendStatus;
  setMembers: (
    memberId: number,
    before: AttendStatus,
    after: AttendStatus,
  ) => void;
  isEditable?: boolean;
}

const EditMemberTableItem = ({
  memberId,
  name,
  activeStatus,
  initAttendStatus,
  setMembers,
  isEditable = true,
}) => {
  const [selectedAttend, setSelectedAttend] =
    useState<AttendStatus>(initAttendStatus);
  const isRelated = selectedAttend !== "nonRelated";

  const itemStyle = classNames(
    "grid h-20 w-fit grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10 sm:w-full",
    {
      "opacity-50": !isEditable,
    },
  );

  const getAfterAttendStatus = (
    initAttend: AttendStatus,
    selectedAttend: AttendStatus,
  ) => {
    if (selectedAttend !== "nonRelated") return "nonRelated";
    if (initAttend === "nonRelated") return "nonResponse";
    return initAttend;
  };

  const handleCheckBoxChange = () => {
    if (!isEditable) {
      toast.error(MESSAGE.EDIT_DISABLED.PROGRAM_ACTIVE);
      return;
    }
    const afterAttendStatus = getAfterAttendStatus(
      initAttendStatus,
      selectedAttend,
    );
    setSelectedAttend(afterAttendStatus);
    setMembers(memberId, initAttendStatus, afterAttendStatus);
  };

  const handleAttendStatusChange = (value: AttendStatus) => {
    if (!isEditable) {
      toast.error(MESSAGE.EDIT_DISABLED.PROGRAM_ACTIVE);
      return;
    }
    setSelectedAttend(value);
    setMembers(memberId, initAttendStatus, value);
  };

  return (
    <div className={itemStyle}>
      <CheckBox checked={isRelated} onClick={handleCheckBoxChange} />
      <span>{ACTIVE_STATUS.TAB[activeStatus]?.text ?? "."}</span>
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
