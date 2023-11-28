import EditAttendStatusModal from "@/components/detail/EditAttendStatusModal.component";
import MemberList from "@/components/detail/MemberList.component";
import ProgramInfo from "@/components/detail/ProgramInfo.component";
import DefaultLayout from "@/components/layout/DefaultLayout";

interface ProgramDetailPageProps {
  params: {
    programId: string;
  };
}

const ProgramDetailPage = ({ params }: ProgramDetailPageProps) => {
  const { programId } = params;

  return (
    <DefaultLayout>
      <ProgramInfo programId={programId} />
      <div className="mb-20 flex w-full flex-col gap-6">
        <MemberList key="attend" programId={programId} attendStatus="attend" />
        <MemberList key="absent" programId={programId} attendStatus="absent" />
      </div>
      <EditAttendStatusModal />
    </DefaultLayout>
  );
};

export default ProgramDetailPage;
