"use client";

import { useState } from "react";
import Input from "../common/Input";
import { convertDate } from "@/src/utils/date";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import Textarea from "../common/Textarea";
import Button from "../common/Button";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  createContentAtom,
  createDateAtom,
  createProgramDateAtom,
  createTitleAtom,
} from "@/src/stores/create";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Calendar from "./Calendar.component";
import { createProgram } from "@/src/apis/program/program";

const EventCreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useAtom(createTitleAtom);
  const [content, setContent] = useAtom(createContentAtom);
  const programDate = useAtomValue(createProgramDateAtom);
  const setDate = useSetAtom(createDateAtom);

  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));

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
    createEventMutate();
  };

  const { mutate: createEventMutate } = useMutation(
    () => createProgram({ title, content, programDate }),
    {
      onSettled: (data) => {
        onReset();
        data && router.replace(`/detail/${data.programId}`);
      },
    }
  );

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[50rem] mt-8"
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
        {openCalender && <Calendar />}
      </section>
      <Textarea
        id="event-title"
        label="행사 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="행사 내용 입력"
      />
      <section className="flex gap-2 justify-end w-[50rem] mt-6">
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

export default EventCreateForm;
