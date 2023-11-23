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
      className="flex w-full flex-col justify-between gap-6 rounded-lg bg-gray-light px-8 py-6 text-center transition-all hover:bg-secondary sm:flex-row sm:text-start"
      key={programId}
    >
      <p className="w-full truncate text-lg font-bold">{title}</p>
      <p className="w-48 text-base font-normal">{convertDate(programDate)}</p>
    </Link>
  );
};

export default ProgramListItem;
