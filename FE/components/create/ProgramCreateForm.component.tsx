"use client";

import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/common/Button.component";
import Calendar from "@/components/common/Calendar.component";
import Input from "@/components/common/Input.component";
import MarkdownEditor from "@/components/common/MarkdownEditor.component";
import { createProgram } from "@/src/apis/program/program";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import {
  createContentAtom,
  createProgramDateAtom,
  createTitleAtom,
} from "@/src/stores/create";
import { convertDate } from "@/src/utils/date";

const ProgramCreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useAtom(createTitleAtom);
  const [content, setContent] = useAtom(createContentAtom);
  const [programDate, setProgramDate] = useAtom(createProgramDateAtom);
  const [date, setDate] = useState<Date | undefined>(
    new Date(parseInt(programDate)),
  );

  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    setProgramDate(date?.getTime().toString() || "");
  };

  const { mutate: createProgramMutate } = useMutation(
    () => createProgram({ title, content: content || "", programDate }),
    {
      onSettled: (data) => {
        formReset();
        data && router.replace(`/detail/${data.programId}`);
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
    setTitle("");
    setContent("");
    setDate(new Date());
    router.push("/");
  };

  return (
    <form
      className="mt-8 flex w-full max-w-[50rem] flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        id="event-title"
        label="행사 이름"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="행사 이름 입력"
      />
      <div
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
          <Calendar date={date} handleDateChange={handleDateChange} />
        )}
      </div>
      <MarkdownEditor
        id="content"
        value={content ? content : ""}
        onChange={(e) => setContent(e)}
        label="행사 내용"
      />
      <div className="mt-6 flex w-[50rem] justify-end gap-2">
        <Button type="submit">생성</Button>
        <Button color="gray" onClick={formReset}>
          취소
        </Button>
      </div>
    </form>
  );
};

export default ProgramCreateForm;
