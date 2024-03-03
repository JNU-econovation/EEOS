"use client";

import { useQueryClient } from "@tanstack/react-query";
import AttendStatusModalLoader from "./AttendStatusModal.loader";
import AttendStatusView from "./AttendStatusView";
import AttendToggleLabel from "./AttendToggleLabel";
import AttendStatusToggle from "@/components/common/attendStatusToggle/AttendStatusToggle";
import ATTEND_STATUS from "@/constants/ATTEND_STATUS";
import MESSAGE from "@/constants/MESSAGE";
import {
  useGetMyAttendStatus,
  usePutMyAttendStatus,
} from "@/hooks/query/useUserQuery";
import { EditableStatus } from "@/types/attendStatusModal";
import { AttendStatus } from "@/types/member";
import { ProgramStatus } from "@/types/program";

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

  const getEditableStatus = (
    attendStatus: AttendStatus,
    programStatus: ProgramStatus,
  ): EditableStatus => {
    if (attendStatus === "nonRelated") return "NON_RELATED";
    if (programStatus !== "active") return "INACTIVE";
    return "EDITABLE";
  };

  const editableStatus = getEditableStatus(attendStatus, programStatus);

  const handleSelectorClick = (value: AttendStatus) => {
    confirm(MESSAGE.CONFIRM.EDIT) && updateAttendStatus(value);
  };

  return (
    <>
      <AttendStatusView userInfo={userInfo} programId={programId} />
      <AttendToggleLabel editableStatus={editableStatus} />
      <AttendStatusToggle
        selectedValue={attendStatus}
        disabled={editableStatus !== "EDITABLE"}
        onSelect={(v) => handleSelectorClick(v)}
      />
    </>
  );
};
export default UserAttendModal;
