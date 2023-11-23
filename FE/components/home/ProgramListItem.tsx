import Link from "next/link";
import { summaryProgram } from "@/src/apis/types/program";
import { convertDate } from "@/src/utils/date";

interface ProgramListItemProps {
  programData: summaryProgram;
}

const ProgramListItem = ({ programData }: ProgramListItemProps) => {
  const { programId, title, programDate } = programData;

  return (
    <Link
      href={`/detail/${programId}`}
      className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-gray-10 px-8 py-6 transition-all hover:bg-secondary-20 sm:flex-row"
      key={programId}
    >
      <p className="w-full truncate text-lg font-bold">{title}</p>
      <p className="w-48 text-base font-normal">{convertDate(programDate)}</p>
    </Link>
  );
};

export default ProgramListItem;
