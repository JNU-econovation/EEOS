"use client";

import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import useProgramFormData from "@/hooks/useProgramFormData";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateProgram } from "@/hooks/query/useProgramQuery";

const ProgramCreateForm = () => {
  const queryClient = useQueryClient();
  const formData = useProgramFormData();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());

  const { mutate: createProgramMutate } = useCreateProgram({
    programData: {
      members: Array.from(members, (memberId) => ({ memberId })),
      title: formData.title,
      deadLine: formData.deadLine,
      content: formData.content,
      category: formData.category,
      type: formData.type,
    },
    formReset: formData.reset,
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
    if (selected) {
      const memberIdList: number[] = queryClient.getQueryData(["memberIdList"]);
      memberIdList.forEach((v) => newMembers.add(v));
    }
    if (!selected) {
      newMembers.clear();
    }
    setMembers(newMembers);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.content ||
      !formData.deadLine ||
      !formData.category ||
      !formData.type
    ) {
      alert("모든 항목을 입력해주세요.");
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
