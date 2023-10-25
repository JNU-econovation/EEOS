"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../common/Button.component";
import Calendar from "../common/Calendar.component";
import Input from "../common/Input.component";
import LoadingSpinner from "../common/LoadingSpinner";
import MarkdownEditor from "../common/MarkdownEditor.component";
import { getProgramDetail, updateProgram } from "@/src/apis/program/program";
import FORM_INFO from "@/src/constants/FORM_INFO";
import ROUTES from "@/src/constants/ROUTES";
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
        data?.programId && router.replace(`${ROUTES.DETAIL}/${data.programId}`);
      },
    },
  );

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
  };

  const formReset = () => {
    router.push(ROUTES.HOME);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !programDate) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    updateProgramMutate();
  };

  if (isLoading) <LoadingSpinner />;
  if (isError) <div>Error!</div>;

  return (
    <form
      className="mt-8 flex w-full max-w-[50rem] flex-col gap-4"
      onSubmit={onSubmit}
    >
      <Input
        id={FORM_INFO.PROGRAM.TITLE.id}
        type={FORM_INFO.PROGRAM.TITLE.type}
        label={FORM_INFO.PROGRAM.TITLE.label}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={FORM_INFO.PROGRAM.TITLE.placeholder}
      />
      <div
        onClick={() => setOpenCalender(true)}
        className="relative"
        ref={calenderRef}
      >
        <Input
          id={FORM_INFO.PROGRAM.DATE.id}
          type={FORM_INFO.PROGRAM.DATE.type}
          label={FORM_INFO.PROGRAM.DATE.label}
          value={convertDate(programDate)}
          placeholder={FORM_INFO.PROGRAM.DATE.placeholder}
        />
        {openCalender && (
          <Calendar date={date} handleDateChange={handleDateChange} />
        )}
      </div>
      <MarkdownEditor
        id={FORM_INFO.PROGRAM.CONTENT.id}
        value={content ? content : ""}
        onChange={(e) => (e ? setContent(e) : setContent(""))}
        label={FORM_INFO.PROGRAM.CONTENT.label}
        placeholder={FORM_INFO.PROGRAM.CONTENT.placeholder}
      />
      <div className="mt-6 flex w-[50rem] justify-end gap-2">
        <Button type="submit">수정</Button>
        <Button color="gray" onClick={formReset}>
          취소
        </Button>
      </div>
    </form>
  );
};

export default ProgramEditForm;
