import AttendeeInfo from "./AttendeeInfo";

interface AttendeeInfoContainerProps {
  programId: number;
}

const AttendeeInfoContainer = ({ programId }: AttendeeInfoContainerProps) => {
  return (
    <div className="space-y-16">
      <AttendeeInfo programId={programId} status="attend" />
      <AttendeeInfo programId={programId} status="late" />
      <AttendeeInfo programId={programId} status="absent" />
      <AttendeeInfo programId={programId} status="nonResponse" />
    </div>
  );
};
export default AttendeeInfoContainer;
