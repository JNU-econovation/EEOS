import Title from "@/components/common/Title.component";
import ProgramCreateForm from "@/components/create/ProgramCreateForm.component";
import DefaultLayout from "@/components/layout/DefaultLayout";

const ProgramCreatePage = () => {
  return (
    <DefaultLayout>
      <Title>행사 생성</Title>
      <ProgramCreateForm />
    </DefaultLayout>
  );
};

export default ProgramCreatePage;
