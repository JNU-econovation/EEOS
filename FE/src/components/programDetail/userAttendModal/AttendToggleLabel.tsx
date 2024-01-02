import ATTEND_STATUS from "@/constants/ATTEND_STATUS";

interface AttendToggleLabelProps {
  canEdit: boolean;
}

const AttendToggleLabel = ({ canEdit }: AttendToggleLabelProps) => {
  return (
    <p className="mb-2">
      {canEdit ? ATTEND_STATUS.LABEL.canEdit : ATTEND_STATUS.LABEL.cannotEdit}
    </p>
  );
};

export default AttendToggleLabel;
