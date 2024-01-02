"use client";

import useModal from "@/hooks/useModal";
import useOutsideRef from "@/hooks/useOutsideRef";
import {
  useGetMyAttendStatus,
  usePutMyAttendStatus,
} from "@/hooks/query/useUserQuery";
import classNames from "classnames";
import AttendStatusView from "./AttendStatusView";
import AttendStatusToggle from "@/components/common/attendStatusToggle/AttendStatusToggle";
import Image from "next/image";
import AttendToggleLabel from "./AttendToggleLabel";
import { AttendStatus } from "@/types/member";
import { useQueryClient } from "@tanstack/react-query";
import { ProgramStatus } from "@/types/program";

interface UserAttendModalProps {
  programId: number;
}

const UserAttendModal = ({ programId }: UserAttendModalProps) => {
  const queryClient = useQueryClient();
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useOutsideRef(closeModal);

  const modalStyle = classNames(
    "z-1 fixed left-0 flex h-60 w-full flex-col items-center gap-5 rounded-t-3xl border-t-2 bg-background pt-2 shadow-2xl transition-all duration-500",
    {
      "bottom-0": isOpen,
      "-bottom-[9rem]": !isOpen,
    },
  );

  const {
    data: userInfo,
    isLoading,
    isError,
  } = useGetMyAttendStatus(programId);

  const { mutate: updateAttendStatus } = usePutMyAttendStatus({
    programId,
    beforeAttendStatus: userInfo ? userInfo.attendStatus : "nonRelated",
  });

  if (isLoading || isError) return null;

  const { attendStatus } = userInfo;
  const programStatus = queryClient.getQueryData<ProgramStatus>([
    "programStatus",
    programId,
  ]);
  const canEdit = attendStatus !== "nonRelated" && programStatus === "active";

  const handleSelectorClick = (value: AttendStatus) => {
    updateAttendStatus(value);
  };

  return (
    <div ref={modalRef} className={modalStyle} onClick={() => openModal()}>
      <Image
        src="/icons/line.svg"
        alt="line"
        width={38}
        height={6}
        style={{ width: 38, height: 6 }}
      />
      <AttendStatusView userInfo={userInfo} />
      <AttendToggleLabel canEdit={canEdit} />
      <AttendStatusToggle
        selectedValue={attendStatus}
        disabled={!canEdit}
        onSelect={(v) => handleSelectorClick(v)}
      />
    </div>
  );
};
export default UserAttendModal;
