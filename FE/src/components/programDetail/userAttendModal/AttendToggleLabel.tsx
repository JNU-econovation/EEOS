import ATTEND_STATUS from "@/constants/ATTEND_STATUS";
import { EditableStatus } from "@/types/attendStatusModal";

interface AttendToggleLabelProps {
  editableStatus: EditableStatus;
}

const AttendToggleLabel = ({ editableStatus }: AttendToggleLabelProps) => {
  return <p className="mb-2">{ATTEND_STATUS.LABEL[editableStatus]}</p>;
};

export default AttendToggleLabel;
