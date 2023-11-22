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
      <section className="w-screen bg-soft_secondary flex flex-col gap-10 items-center py-16">
        <MemberList key="attend" programId={programId} attendStatus="attend" />
        <MemberList key="absent" programId={programId} attendStatus="absent" />
      </section>
    </SubLayout>
  );
};

export default DetailPage;
