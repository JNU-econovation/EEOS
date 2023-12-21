"use client";

import ProgramForm from "../common/form/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import useProgramFormData from "@/hooks/useProgramFormData";

const ProgramCreateForm = () => {
  const formData = useProgramFormData();

  return (
    <ProgramForm formType="create" formData={formData}>
      <MemberTable
        formType="create"
        members={formData.members}
        setMembers={formData.setMembers}
      />
    </ProgramForm>
  );
};
export default ProgramCreateForm;
