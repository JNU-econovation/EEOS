import EventInfo from "@/components/detail/EventInfo";
import MemberList from "@/components/detail/MemberList";
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
      <EventInfo programId={programId} />
      <section className="w-screen bg-soft_secondary flex flex-col gap-10 items-center py-16">
        <MemberList programId={programId} attendStatus="attend" />
        <MemberList programId={programId} attendStatus="absent" />
      </section>
    </SubLayout>
  );
};

export default DetailPage;
