import Title from "@/components/common/Title.component";
import EditMemberList from "@/components/edit/EditMemberList.component";
import ProgramEditForm from "@/components/edit/ProgramEditForm.component";
import SubLayout from "@/components/layout/SubLayout";

interface ProgramEditPageProps {
  params: {
    programId: string;
  };
}

const ProgramEditPage = ({ params }: ProgramEditPageProps) => {
  const { programId } = params;

  return (
    <SubLayout right="none">
      <Title>행사 정보 수정</Title>
      <ProgramEditForm programId={programId} />
      <EditMemberList programId={programId} />
    </SubLayout>
  );
};

export default ProgramEditPage;
