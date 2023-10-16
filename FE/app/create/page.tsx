import Title from "@/components/common/Title";
import SubLayout from "@/components/layout/SubLayout";
import EventCreateForm from "@/components/create/EventCreateForm";

const CreatePage = () => {
  return (
    <SubLayout right="none">
      <Title>행사 생성</Title>
      <EventCreateForm />
    </SubLayout>
  );
};

export default CreatePage;
