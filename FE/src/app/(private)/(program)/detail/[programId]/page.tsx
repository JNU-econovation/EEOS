import AttendeeInfoContainer from "@/components/programDetail/attendee/AttendeeInfoContainer";
import ProgramInfo from "@/components/programDetail/program/ProgramInfo";
import UserAttendModal from "@/components/programDetail/userAttendModal/UserAttendModal";

interface ProgramDetailPageProps {
  params: {
    programId: string;
  };
}

const ProgramDetailPage = ({ params }: ProgramDetailPageProps) => {
  const { programId } = params;

  return (
    <div className="space-y-16">
      <ProgramInfo programId={+programId} />
      <AttendeeInfoContainer programId={+programId} />
      <UserAttendModal programId={+programId} />
    </div>
  );
};
export default ProgramDetailPage;
