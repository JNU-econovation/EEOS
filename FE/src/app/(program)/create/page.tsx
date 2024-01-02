import Title from "@/components/common/Title";
import ProgramCreateForm from "@/components/programCreate/ProgramCreateForm";

const ProgramCreatePage = () => {
  return (
    <div className="space-y-12">
      <Title text="행사 생성" />
      <ProgramCreateForm />
    </div>
  );
};
export default ProgramCreatePage;
