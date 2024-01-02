import PROGRAM from "@/constants/PROGRAM";
import { useGetProgramList } from "@/hooks/query/useProgramQuery";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import ProgramListItem from "./ProgramListItem";

interface ProgramListProps {
  category: ProgramCategoryWithAll;
  programStatus: ProgramStatus;
  page: number;
}

const ProgramList = ({ category, programStatus, page }: ProgramListProps) => {
  const { data: programListData } = useGetProgramList({
    category,
    programStatus,
    page,
    size: PROGRAM.LIST_SIZE,
  });
  const { programs } = programListData!;

  return (
    <div className="w-full space-y-5">
      {programs.map((program) => (
        <ProgramListItem programData={program} />
      ))}
    </div>
  );
};
export default ProgramList;
