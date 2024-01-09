"use client";

import LoadingSpinner from "@/components/common/LoadingSpinner";
import Title from "@/components/common/Title";
import AccessRightValidate from "@/components/common/validate/AccessRight";
import ProgramEditForm from "@/components/programEdit/ProgramEditForm";
import FORM_INFO from "@/constants/FORM_INFO";
import { useGetProgramById } from "@/hooks/query/useProgramQuery";
import { convertText } from "@/utils/convert";

interface ProgramEditPageProps {
  params: {
    programId: string;
  };
}

const ProgramEditPage = ({ params }: ProgramEditPageProps) => {
  const { programId } = params;
  const { data: programInfo, isLoading } = useGetProgramById(+programId);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <AccessRightValidate programId={programId} />
      <div className="space-y-12">
        <Title text="행사 수정" />
        <ProgramEditForm programId={programId} programInfo={programInfo} />
      </div>
    </>
  );
};

export default ProgramEditPage;
