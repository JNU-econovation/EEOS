import PROGRAM from "@/constants/PROGRAM";
import { useGetProgramList } from "@/hooks/query/useProgramQuery";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import ProgramListItem from "./ProgramListItem";
import ProgramListLoader from "./ProgramList.loader";
import { useQueryClient } from "@tanstack/react-query";
import Paginataion from "../common/pagination/Pagination";

interface ProgramListProps {
  category?: ProgramCategoryWithAll;
  programStatus?: ProgramStatus;
  page?: number;
  setPage: (page: number) => void;
}

const ProgramList = ({
  category = "all",
  programStatus = "active",
  page = 1,
  setPage: handleSetPage,
}: ProgramListProps) => {
  const queryClient = useQueryClient();
  const {
    data: programListData,
    isLoading,
    isError,
  } = useGetProgramList({
    category,
    programStatus,
    page: page - 1,
    size: PROGRAM.LIST_SIZE,
  });

  if (isLoading) return <ProgramListLoader />;
  if (isError) return <div>Error...</div>;

  queryClient.setQueryData<number>(["totalPage"], programListData.totalPage);

  const { programs } = programListData;

  return (
    <>
      <div className="w-full space-y-5">
        {programs.map((program) => (
          <ProgramListItem key={program.programId} programData={program} />
        ))}
      </div>
      <Paginataion
        totalPage={programListData.totalPage}
        currentPage={page}
        onChange={(v) => handleSetPage(v)}
      />
    </>
  );
};
export default ProgramList;
