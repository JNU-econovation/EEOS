"use client";

import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import useProgramFormData from "@/hooks/useProgramFormData";
import { useQueryClient } from "@tanstack/react-query";

const ProgramCreateForm = () => {
  const queryClient = useQueryClient();
  const formData = useProgramFormData();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());

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

  return (
    <ProgramForm formType="create" formData={formData}>
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
