"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import CustomTabItem from "../common/CustomTabItem";
import LoadingSpinner from "../common/LoadingSpinner";
import MarkdownViewer from "../common/markdown/MarkdownViewer.component";
import Title from "../common/Title.component";
import { getProgramDetail } from "@/src/apis/program";
import { convertDate } from "@/src/utils/date";

interface ProgramInfoProps {
  programId: string;
}

const ProgramInfo = ({ programId }: ProgramInfoProps) => {
  const { data, isLoading, isError } = useQuery(
    ["ProgramInfo", programId],
    () => getProgramDetail(programId),
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <>Error!</>;

  // FIXME: text props로 받아서 사용
  return (
    <div className="flex w-full flex-col justify-center pt-12">
      <CustomTabItem text="주간발표" size="sm" color="yellow" rounded />
      <Title className="my-3">{data.title}</Title>
      <div className="flex w-full justify-between border-b-[1.5px] border-gray-20 py-4">
        <span className="text-lg">{convertDate(data.programDate)}</span>
        <Link href={`/edit/${programId}`}>
          <Image src="/icons/pencil.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <div className="my-10 min-h-[18rem] w-full px-6">
        <MarkdownViewer value={data.content} />
      </div>
    </div>
  );
};
export default ProgramInfo;
