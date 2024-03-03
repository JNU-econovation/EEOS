"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import ProgramForm from "../common/form/program/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import FORM_INFO from "@/constants/FORM_INFO";
import { useCreateProgram } from "@/hooks/query/useProgramQuery";
import useProgramFormData from "@/hooks/useProgramFormData";

const ProgramCreateForm = () => {
  const queryClient = useQueryClient();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());
  const formData = useProgramFormData();
  const { title, deadLine, content, category, type, reset } = formData;

  const { mutate: createProgramMutate } = useCreateProgram({
    programData: {
      members: Array.from(members, (memberId) => ({ memberId })),
      title: type === "demand" ? `${FORM_INFO.DEMAND_PREFIX} ${title}` : title,
      deadLine: deadLine,
      content: content,
      category: category,
      type: type,
    },
    formReset: reset,
  });

  const updateMembers = (memberId: number) => {
    const newMembers = new Set<number>(members);
    newMembers.has(memberId)
      ? newMembers.delete(memberId)
      : newMembers.add(memberId);
    setMembers(newMembers);
  };

  const updateAllMembers = (selected: boolean) => {
    const newMembers = new Set<number>(members);
    const memberIdList: number[] = queryClient.getQueryData(["memberIdList"]);
    if (selected) {
      memberIdList.forEach((v) => newMembers.add(v));
    }
    if (!selected) {
      memberIdList.forEach((v) => newMembers.delete(v));
    }
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content || !deadLine || !category || !type) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
    createProgramMutate();
  };

  return (
    <ProgramForm formType="create" onSubmit={handleSubmit} {...formData}>
      <MemberTable
        formType="create"
        members={members}
        setMembers={updateMembers}
        onClickHeaderCheckBox={updateAllMembers}
      />
    </ProgramForm>
  );
};
export default ProgramCreateForm;
