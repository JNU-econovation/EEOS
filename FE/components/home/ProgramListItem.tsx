import { summaryProgram } from "@/src/apis/types/program";
import { convertDate } from "@/src/utils/date";
import Link from "next/link";

interface ProgramListItemProps {
  programData: summaryProgram;
}

const ProgramListItem = ({ programData }: ProgramListItemProps) => {
  const { programId, title, programDate } = programData;

  return (
    <Link
      href={`/detail/${programId}`}
      className="flex justify-between items-center w-full rounded-lg px-8 py-6 bg-gray-light hover:bg-secondary transition-all"
      key={programId}
    >
      <span className="font-bold text-lg">{title}</span>
      <span className="font-normal text-base">{convertDate(programDate)}</span>
    </Link>
  );
};

export default ProgramListItem;
