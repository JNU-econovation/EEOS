import { summaryProgram } from "@/src/apis/types/program";
import ProgramListItem from "./ProgramListItem";

interface ProgramListProps {
  programs: summaryProgram[];
}

const ProgramList = ({ programs }: ProgramListProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {programs.map((program) => (
        <ProgramListItem programData={program} />
      ))}
    </div>
  );
};

export default ProgramList;
