import ProgramListItem from "./ProgramListItem";
import { summaryProgram } from "@/src/apis/types/program";

interface ProgramListProps {
  programs: summaryProgram[];
}

const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <div className="flex w-full flex-col gap-5">
      {programs.map((program) => (
        <ProgramListItem programData={program} />
      ))}
    </div>
  );
};

export default ProgramList;
