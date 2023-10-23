"use client";

import { useQuery } from "@tanstack/react-query";
import Title from "../common/Title";
import { getProgramDetail } from "@/src/apis/program/program";
import Image from "next/image";
import { convertDate } from "@/src/utils/date";
import Link from "next/link";
import MDEditor from "@uiw/react-md-editor";

interface ProgramInfoProps {
  programId: string;
}

const ProgramInfo = ({ programId }: ProgramInfoProps) => {
  const { data, isLoading, isError } = useQuery(
    ["ProgramInfo", programId],
    () => getProgramDetail(programId)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Title>{data.title}</Title>
      <div className="flex w-full justify-between p-6 border-b-[1.5px]">
        <span className="text-lg">{convertDate(data.programDate)}</span>
        <Link href={`/edit/${programId}`}>
          <Image src="/icons/pencil.svg" alt="edit" width={20} height={20} />
        </Link>
      </div>
      <div className="w-full min-h-[360px] my-10 px-6">
        <MDEditor.Markdown source={data.content} />
      </div>
    </div>
  );
};
export default ProgramInfo;
