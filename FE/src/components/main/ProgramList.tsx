import PROGRAM from "@/constants/PROGRAM";
import { useGetProgramList } from "@/hooks/query/useProgramQuery";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import ProgramListItem from "./ProgramListItem";
import ProgramListLoader from "./ProgramList.loader";

interface ProgramListProps {
  category: ProgramCategoryWithAll;
  programStatus: ProgramStatus;
  page: number;
}

const ProgramList = ({ category, programStatus, page }: ProgramListProps) => {
  const {
    data: programListData,
    isLoading,
    isError,
  } = useGetProgramList({
    category,
    programStatus,
    page,
    size: PROGRAM.LIST_SIZE,
  });

  if (isLoading) return <ProgramListLoader />;
  if (isError) return <div>Error...</div>;

  const { programs } = programListData;

  return (
    <div className="w-full space-y-5">
      {programs.map((program) => (
        <ProgramListItem key={program.programId} programData={program} />
      ))}
    </div>
  );
};
export default ProgramList;
