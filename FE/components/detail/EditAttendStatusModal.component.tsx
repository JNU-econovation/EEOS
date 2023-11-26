"use client";

import classNames from "classnames";
import { useState } from "react";
import AttendStatusBadge from "../common/attendStatus/AttendStatusBadge.component";
import AttendStatusSelector from "../common/attendStatus/AttendStatusSelector.component";
import { attendStatusList } from "../common/memberTable/MemberTableItem.component";
import ATTEND_STATUS from "@/src/constants/ATTEND_STATUS";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";

const EditAttendStatusModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useOutsideClick(() => setIsOpen(false));

  // FIXME: react-query로 변경
  const name = "25기 강바다";
  const [attendStatus, setAttendStatus] = useState("nonRelated");

  const { text, color } = ATTEND_STATUS.BADGE_STYLE.filter(
    (style) => style.type === attendStatus,
  )[0];

  const modalClassName = classNames(
    "z-1 fixed flex h-60 w-full flex-col items-center justify-center gap-11 rounded-t-3xl border-t-2 border-gray-10 bg-background shadow-2xl transition-all duration-500",
    {
      "bottom-0": isOpen,
      "-bottom-[10rem]": !isOpen,
    },
  );
  return (
    <div
      className={modalClassName}
      onClick={() => setIsOpen(true)}
      ref={modalRef}
    >
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold">{name}</p>
        <AttendStatusBadge text={text} color={color} />
      </div>
      <p>{ATTEND_STATUS.LABEL}</p>
      <AttendStatusSelector
        selectedValue={attendStatus}
        options={attendStatusList}
        onSelect={(v) => setAttendStatus(v)}
      />
    </div>
  );
};
export default EditAttendStatusModal;
