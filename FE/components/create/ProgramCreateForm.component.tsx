"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProgramForm from "../common/form/ProgramForm.component";
import { createProgram } from "@/src/apis/program";
import ROUTES from "@/src/constants/ROUTES";
import { getLocalStorage, setLocalStorage } from "@/src/utils/localStorage";

const ProgramCreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [programDate, setProgramDate] = useState(
    new Date().getTime().toString(),
  );

  useEffect(() => {
    setTitle(getLocalStorage("title") || "");
    setContent(getLocalStorage("content") || "");
    setProgramDate(getLocalStorage("date") || new Date().getTime().toString());
  }, []);

  const defaultData = {
    title,
    setTitle: (title: string) => {
      setTitle(title);
      setLocalStorage("title", title);
    },
    content,
    setContent: (content: string) => {
      setContent(content);
      setLocalStorage("content", content);
    },
    programDate,
    setProgramDate: (date: string) => {
      setProgramDate(date);
      setLocalStorage("date", date);
    },
  };

  const { mutate: createProgramMutate } = useMutation(
    () => createProgram({ title, content, programDate }),
    {
      onSettled: (data) => {
        formReset();
        data && router.replace(`${ROUTES.DETAIL}/${data.programId}`);
      },
    },
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !programDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    createProgramMutate();
  };

  const formReset = () => {
    setLocalStorage("title", "");
    setLocalStorage("content", "");
    setLocalStorage("date", new Date().getTime().toString());
    router.push(ROUTES.HOME);
  };

  return (
    <ProgramForm
      handleSubmit={handleSubmit}
      formReset={formReset}
      defaultData={defaultData}
    />
  );
};

export default ProgramCreateForm;
