"use client";

import { getProgramDetail, updateProgram } from "@/src/apis/program/program";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Input from "../common/Input";
import { convertDate } from "@/src/utils/date";
import MarkdownEditor from "../common/MarkdownEditor.component";
import Calendar from "../create/Calendar.component";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

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

  const { data, isLoading, isError } = useQuery(
    ["ProgramInfo", programId],
    () =>
      getProgramDetail(programId).then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setDate(new Date(parseInt(data.programDate)));
        return data;
      })
  );

  const { mutate: updateProgramMutate } = useMutation(
    () =>
      updateProgram(programId, {
        title,
        content: content || "",
        programDate,
      }),
    {
      onSettled: (data) => {
        data && router.replace(`/detail/${data.programId}`);
      },
    }
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
      <section className="flex gap-2 justify-end w-[50rem] mt-6">
        <Button color="primary" sizeType="base" leftIcon={false} type="submit">
          수정
        </Button>
        <Button color="gray" sizeType="base" leftIcon={false} onClick={onReset}>
          취소
        </Button>
      </section>
    </form>
  );
};

export default ProgramEditForm;
