import Title from "@/components/common/Title";
import ProgramCreateForm from "@/components/create/ProgramCreateForm";
import SubLayout from "@/components/layout/SubLayout";

const CreatePage = () => {
  return (
    <SubLayout right="none">
      <Title>행사 생성</Title>
      <ProgramCreateForm />
    </SubLayout>
  );
};

export default CreatePage;
