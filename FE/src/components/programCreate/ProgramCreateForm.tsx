"use client";

import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import useProgramFormData from "@/hooks/useProgramFormData";

const ProgramCreateForm = () => {
  const formData = useProgramFormData();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());

  const updateMembers = (memberId: number) => {
    const newMembers = new Set<number>(members);
    newMembers.has(memberId)
      ? newMembers.delete(memberId)
      : newMembers.add(memberId);
    setMembers(newMembers);
  };

  return (
    <ProgramForm formType="create" formData={formData}>
      <MemberTable
        formType="create"
        members={members}
        setMembers={updateMembers}
      />
    </ProgramForm>
  );
};
export default ProgramCreateForm;
