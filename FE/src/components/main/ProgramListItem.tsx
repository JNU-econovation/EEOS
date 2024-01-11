import { ProgramSimpleInfoDto } from "@/apis/dtos/program.dto";
import ROUTES from "@/constants/ROUTES";
import { convertDate } from "@/utils/convert";
import Link from "@/components/common/Link";

interface ProgramListItemProps {
  programData: ProgramSimpleInfoDto;
}

const ProgramListItem = ({ programData }: ProgramListItemProps) => {
  const { programId, title, deadLine } = programData;
  return (
    <Link
      href={ROUTES.DETAIL(programId)}
      className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-gray-10 px-8 py-6 transition-all hover:bg-secondary-20 sm:flex-row"
      key={programId}
    >
      <p className="w-full truncate text-lg font-bold">{title}</p>
      <p className="w-48 text-base font-normal">{convertDate(deadLine)}</p>
    </Link>
  );
};

export default ProgramListItem;
