import { UserAttendStatusInfoDto } from "@/apis/dtos/user.dto";
import AttendStatusToggleItem from "@/components/common/attendStatusToggle/AttendStatusToggleItem";
import ATTEND_STATUS from "@/constants/ATTEND_STATUS";

interface AttendStatusViewProps {
  userInfo: UserAttendStatusInfoDto;
}

const AttendStatusView = ({ userInfo }: AttendStatusViewProps) => {
  const { name, attendStatus } = userInfo;
  const { text, color } = ATTEND_STATUS.USER[attendStatus];
  return (
    <div className="mb-4 flex items-center gap-4">
      <p className="text-lg font-semibold">{name}</p>
      <AttendStatusToggleItem text={text} color={color} />
    </div>
  );
};
export default AttendStatusView;
