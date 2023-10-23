import MemberList from "@/components/detail/MemberList";
import ProgramInfo from "@/components/detail/ProgramInfo";
import SubLayout from "@/components/layout/SubLayout";

interface DetailPageProps {
  params: {
    programId: string;
  };
}

const DetailPage = ({ params }: DetailPageProps) => {
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

export default DetailPage;
