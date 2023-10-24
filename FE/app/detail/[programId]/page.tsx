import MemberList from "@/components/detail/MemberList.component";
import ProgramInfo from "@/components/detail/ProgramInfo.component";
import SubLayout from "@/components/layout/SubLayout";

interface ProgramDetailPageProps {
  params: {
    programId: string;
  };
}

const ProgramDetailPage = ({ params }: ProgramDetailPageProps) => {
  const { programId } = params;
  return (
    <SubLayout right="btn">
      <ProgramInfo programId={programId} />
      <section className="flex w-screen flex-col items-center gap-10 bg-soft_secondary py-16">
        <MemberList key="attend" programId={programId} attendStatus="attend" />
        <MemberList key="absent" programId={programId} attendStatus="absent" />
      </section>
    </SubLayout>
  );
};

export default ProgramDetailPage;
