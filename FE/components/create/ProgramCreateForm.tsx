"use client";

import { useEffect, useState } from "react";
import Input from "../common/Input";
import { convertDate } from "@/src/utils/date";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import Button from "../common/Button";
import { useAtom } from "jotai";
import {
  createContentAtom,
  createProgramDateAtom,
  createTitleAtom,
} from "@/src/stores/create";
import { useMutation } from "@tanstack/react-query";
import Calendar from "../common/Calendar.component";
import { createProgram } from "@/src/apis/program/program";
import MarkdownEditor from "../common/MarkdownEditor.component";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    date && console.log(date);
    date && setProgramDate(date.getTime().toString());
  }, [date]);

  const onReset = () => {
    setTitle("");
    setContent("");
    setDate(new Date());
    router.push("/");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !programDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    createProgramMutate();
  };

  const { mutate: createProgramMutate } = useMutation(
    () => createProgram({ title, content: content || "", programDate }),
    {
      onSettled: (data) => {
        onReset();
        data && router.replace(`/detail/${data.programId}`);
      },
    },
  );

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
        onChange={(e) => setContent(e)}
        label="행사 내용"
      />
      <section className="mt-6 flex w-[50rem] justify-end gap-2">
        <Button color="primary" sizeType="base" leftIcon={false} type="submit">
          생성
        </Button>
        <Button color="gray" sizeType="base" leftIcon={false} onClick={onReset}>
          취소
        </Button>
      </section>
    </form>
  );
};

export default ProgramCreateForm;
