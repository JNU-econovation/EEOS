import SubLayout from "@/components/layout/SubLayout";

interface DetailPageProps {
  params: {
    eventId: string;
  };
}

const DetailPage = ({ params }: DetailPageProps) => {
  const { eventId } = params;
  return <SubLayout right="btn">Detail Page #{eventId}</SubLayout>;
};

export default DetailPage;
