"use client";

import ProgramDetail from "./ProgramDetail";
import ProgramHeader from "./ProgramHeader";
import ProgramInfoLoader from "./ProgramInfo.loader";
import { useGetProgramById } from "@/hooks/query/useProgramQuery";

interface ProgramInfoProps {
  programId: number;
}

const ProgramInfo = ({ programId }: ProgramInfoProps) => {
  const {
    data: programData,
    isLoading,
    isError,
  } = useGetProgramById(programId);

  if (isLoading) return <ProgramInfoLoader />;
  if (isError) return <div>에러 발생</div>;

  return (
    <section className="space-y-8">
      <ProgramHeader data={programData} />
      <ProgramDetail data={programData} />
    </section>
  );
};
export default ProgramInfo;
