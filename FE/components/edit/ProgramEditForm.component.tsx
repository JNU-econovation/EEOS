"use client";

import { useMutation, useQueries } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm.component";
import LoadingSpinner from "../common/LoadingSpinner";
import { getAllMembers } from "@/src/apis/member";
import { getProgramDetail, updateProgram } from "@/src/apis/program";
import ROUTES from "@/src/constants/ROUTES";

interface ProgramEditFormProps {
  programId: string;
}

const ProgramEditForm = ({ programId }: ProgramEditFormProps) => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [programDate, setProgramDate] = useState<string>(
    new Date().getTime().toString(),
  );

  const defaultData = {
    title,
    setTitle: (title: string) => setTitle(title),
    content,
    setContent: (content: string) => setContent(content),
    programDate,
    setProgramDate: (date: string) => setProgramDate(date),
  };

  const results = useQueries({
    queries: [
      {
        queryKey: ["ProgramInfo", programId],
        queryFn: () =>
          getProgramDetail(programId).then((data) => {
            setTitle(data.title);
            setContent(data.content);
            setProgramDate(data.programDate);
            return data;
          }),
      },
      {
        queryKey: ["editEditMemberList", programId],
        queryFn: () => getAllMembers(programId),
      },
    ],
  });

  const { data: members, isLoading, isError } = results[1];
  console.log(members);

  const { mutate: updateProgramMutate } = useMutation(
    () =>
      updateProgram(programId, {
        title,
        content: content,
        programDate,
      }),
    {
      onSettled: (data) => {
        data?.programId && router.replace(`${ROUTES.DETAIL}/${data.programId}`);
      },
    },
  );

  const formReset = () => {
    router.push(ROUTES.HOME);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !programDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    updateProgramMutate();
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <>에러...</>;

  return (
    <ProgramForm
      handleSubmit={handleSubmit}
      formReset={formReset}
      defaultData={defaultData}
      isEdit={true}
      memberList={members}
    />
  );
};

export default ProgramEditForm;
