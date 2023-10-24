"use client";

import { useQuery } from "@tanstack/react-query";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "../common/LoadingSpinner";
import Title from "../common/Title.component";
import { getProgramDetail } from "@/src/apis/program/program";
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

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Title>{data.title}</Title>
      <div className="flex w-full justify-between border-b-[1.5px] p-6">
        <span className="text-lg">{convertDate(data.programDate)}</span>
        <Link href={`/edit/${programId}`}>
          <Image src="/icons/pencil.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <div className="my-10 min-h-[360px] w-full px-6">
        <MDEditor.Markdown source={data.content} />
      </div>
    </div>
  );
};
export default ProgramInfo;
