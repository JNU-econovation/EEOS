import Title from "@/components/common/Title.component";
import ProgramEditForm from "@/components/edit/ProgramEditForm.component";
import DefaultLayout from "@/components/layout/DefaultLayout";

interface ProgramEditPageProps {
  params: {
    programId: string;
  };
}

const ProgramEditPage = ({ params }: ProgramEditPageProps) => {
  const { programId } = params;

  return (
    <DefaultLayout>
      <Title className="w-full">행사 수정</Title>
      <ProgramEditForm programId={programId} />
    </DefaultLayout>
  );
};

export default ProgramEditPage;
