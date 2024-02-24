import { useQueryClient } from "@tanstack/react-query";
import { UserAttendStatusInfoDto } from "@/apis/dtos/user.dto";
import StatusToggleItem from "@/components/common/attendStatusToggle/StatusToggleItem";
import ATTEND_STATUS from "@/constants/ATTEND_STATUS";
import { ProgramType } from "@/types/program";

interface AttendStatusViewProps {
  userInfo: UserAttendStatusInfoDto;
  programId: number;
}

const AttendStatusView = ({ userInfo, programId }: AttendStatusViewProps) => {
  const queryClient = useQueryClient();
  const { name, attendStatus } = userInfo;
  const programType = queryClient.getQueryData<ProgramType>([
    "programType",
    programId,
  ]);

  const { demand_text, text, color } = ATTEND_STATUS.USER[attendStatus];
  const isDemandNonResponse =
    programType === "demand" && attendStatus === "nonResponse";
  const displayText = isDemandNonResponse ? demand_text : text;

  return (
    <div className="mb-4 flex items-center gap-4">
      <p className="text-lg font-semibold">{name}</p>
      <StatusToggleItem text={displayText} color={color} />
    </div>
  );
};
export default AttendStatusView;
