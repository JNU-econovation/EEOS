"use client";

import Title from "@/components/common/Title";
import ProgramEditForm from "@/components/programEdit/ProgramEditForm";
import { useGetProgramById } from "@/hooks/query/useProgramQuery";

interface ProgramEditPageProps {
  params: {
    programId: string;
  };
}

const ProgramEditPage = ({ params }: ProgramEditPageProps) => {
  const { programId } = params;
  const {
    data: programInfo,
    isLoading,
    isError,
  } = useGetProgramById(+programId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <div className="space-y-12">
      <Title text="행사 수정" />
      <ProgramEditForm programId={programId} programInfo={programInfo} />
    </div>
  );
};

export default ProgramEditPage;
