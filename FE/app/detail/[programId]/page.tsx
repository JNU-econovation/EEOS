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
      <MemberList key="attend" programId={programId} attendStatus="attend" />
      <MemberList key="absent" programId={programId} attendStatus="absent" />
    </DefaultLayout>
  );
};

export default ProgramDetailPage;
