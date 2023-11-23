"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm.component";
import LoadingSpinner from "../common/LoadingSpinner";
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
    setTitle,
    content,
    setContent,
    programDate,
    setProgramDate,
  };

  const { isLoading, isError } = useQuery(["ProgramInfo", programId], () =>
    getProgramDetail(programId).then((data) => {
      setTitle(data.title);
      setContent(data.content);
      setProgramDate(data.programDate);
      return data;
    }),
  );

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
  if (isError) return <div>Error!</div>;

  return (
    <ProgramForm
      handleSubmit={handleSubmit}
      formReset={formReset}
      defaultData={defaultData}
      isEdit={true}
    />
  );
};

export default ProgramEditForm;
