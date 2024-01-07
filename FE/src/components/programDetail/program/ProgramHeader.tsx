import { ProgramInfoDto } from "@/apis/dtos/program.dto";
import Title from "@/components/common/Title";
import TabItem from "@/components/common/tabs/TabItem";
import PROGRAM from "@/constants/PROGRAM";
import ROUTES from "@/constants/ROUTES";
import { convertDate } from "@/utils/convert";
import Image from "next/image";
import Link from "@/components/common/Link";

interface ProgramHeaderProps {
  data: ProgramInfoDto;
}

const DEADLINE_TEXT = "마감기한 : ";

const ProgramHeader = ({ data }: ProgramHeaderProps) => {
  const { category, title, deadLine, programId, accessRight } = data;

  const categoryText = PROGRAM.CATEGORY_TAB[category].text;

  return (
    <section className="space-y-4 border-b-2 py-4">
      <TabItem color="yellow" size="sm" text={categoryText} rounded />
      <Title text={title} />
      <div className="flex justify-between">
        <p className="text-lg">{DEADLINE_TEXT + convertDate(deadLine)}</p>
        {accessRight === "edit" && (
          <div className="flex items-end gap-6">
            <Link href={ROUTES.EDIT(programId)}>
              <Image
                src="/icons/pencil.svg"
                alt="프로그램 수정"
                width={22}
                height={22}
                className="h-[22px] w-[22px] hover:cursor-pointer"
              />
            </Link>
            <Image
              src="/icons/trash.svg"
              alt="프로그램 삭제"
              width={22}
              height={22}
              style={{ width: 22, height: 22 }}
              className="h-[22px] w-[22px] hover:cursor-pointer"
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default ProgramHeader;
