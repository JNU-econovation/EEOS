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
      <div className="mx-8 flex w-[98vw] flex-col items-center gap-10 bg-secondary-10 py-8">
        <MemberList key="attend" programId={programId} attendStatus="attend" />
        <MemberList key="absent" programId={programId} attendStatus="absent" />
      </div>
    </DefaultLayout>
  );
};

export default ProgramDetailPage;
