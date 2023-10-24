import Title from "@/components/common/Title.component";
import ProgramCreateForm from "@/components/create/ProgramCreateForm.component";
import SubLayout from "@/components/layout/SubLayout";

const ProgramCreatePage = () => {
  return (
    <SubLayout right="none">
      <Title>행사 생성</Title>
      <ProgramCreateForm />
    </SubLayout>
  );
};

export default ProgramCreatePage;
