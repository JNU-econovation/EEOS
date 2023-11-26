"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProgramForm from "../common/form/ProgramForm.component";
import { createProgram } from "@/src/apis/program";
import { defaultMember } from "@/src/apis/types/member";
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

  const memberList: defaultMember[] = [
    {
      memberId: 1,
      name: "김민수",
      generation: "24",
      attendStatus: "attend",
    },
    {
      memberId: 2,
      name: "고구마",
      generation: "25",
      attendStatus: "attend",
    },

    {
      memberId: 3,
      name: "강바다",
      generation: "25",
      attendStatus: "attend",
    },
    {
      memberId: 4,
      name: "감자",
      generation: "23",
      attendStatus: "attend",
    },
  ];

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
      isEdit={false}
      memberList={memberList}
    />
  );
};

export default ProgramCreateForm;
