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
import MESSAGE from "@/constants/MESSAGE";
import AttendStatusModalLoader from "./AttendStatusModal.loader";

interface UserAttendModalProps {
  programId: number;
}

const UserAttendModal = ({ programId }: UserAttendModalProps) => {
  const queryClient = useQueryClient();
  const { data: userInfo, isLoading } = useGetMyAttendStatus(programId);
  const { mutate: updateAttendStatus } = usePutMyAttendStatus({
    programId,
    beforeAttendStatus: userInfo ? userInfo.attendStatus : "nonRelated",
  });

  if (isLoading) return <AttendStatusModalLoader />;

  const { attendStatus } = userInfo;
  const programStatus = queryClient.getQueryData<ProgramStatus>([
    "programStatus",
    programId,
  ]);
  const canEdit = attendStatus !== "nonRelated" && programStatus === "active";

  const handleSelectorClick = (value: AttendStatus) => {
    confirm(MESSAGE.CONFIRM.EDIT) && updateAttendStatus(value);
  };

  return (
    <>
      <AttendStatusView userInfo={userInfo} programId={programId} />
      <AttendToggleLabel canEdit={canEdit} />
      <AttendStatusToggle
        selectedValue={attendStatus}
        disabled={!canEdit}
        onSelect={(v) => handleSelectorClick(v)}
      />
    </>
  );
};
export default UserAttendModal;
