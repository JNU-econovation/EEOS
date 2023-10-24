"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../common/Button.component";
import Calendar from "../common/Calendar.component";
import Input from "../common/Input.component";
import MarkdownEditor from "../common/MarkdownEditor.component";
import { getProgramDetail, updateProgram } from "@/src/apis/program/program";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import { convertDate } from "@/src/utils/date";

interface ProgramEditFormProps {
  programId: string;
}

const ProgramEditForm = ({ programId }: ProgramEditFormProps) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<Date | undefined>(new Date());

  const programDate = date
    ? date.getTime().toString()
    : new Date().getTime().toString();

  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));

  const { isLoading, isError } = useQuery(["ProgramInfo", programId], () =>
    getProgramDetail(programId).then((data) => {
      setTitle(data.title);
      setContent(data.content);
      setDate(new Date(parseInt(data.programDate)));
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
        data?.programId && router.replace(`/detail/${data.programId}`);
      },
    },
  );

  const onReset = () => {
    router.push("/");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !programDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    updateProgramMutate();
  };

  if (isLoading) <div>Loading...</div>;
  if (isError) <div>Error!</div>;

  return (
    <form
      className="mt-8 flex w-full max-w-[50rem] flex-col gap-4"
      onSubmit={onSubmit}
    >
      <Input
        id="event-title"
        label="행사 이름"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="행사 이름 입력"
      />
      <section
        onClick={() => setOpenCalender(true)}
        className="relative"
        ref={calenderRef}
      >
        <Input
          id="event-date"
          label="행사 일정"
          value={convertDate(programDate)}
          placeholder="XXXX-XX-XX"
        />
        {openCalender && (
          <Calendar programDate={date} setProgramDate={setDate} />
        )}
      </section>
      <MarkdownEditor
        id="content"
        value={content ? content : ""}
        onChange={(e) => (e ? setContent(e) : setContent(""))}
        label="행사 내용"
      />
      <section className="mt-6 flex w-[50rem] justify-end gap-2">
        <Button type="submit">수정</Button>
        <Button color="gray" onClick={onReset}>
          취소
        </Button>
      </section>
    </form>
  );
};

export default ProgramEditForm;
