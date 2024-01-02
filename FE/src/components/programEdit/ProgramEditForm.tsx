"use client";

import useProgramFormData from "@/hooks/useProgramFormData";
import { useState } from "react";
import ProgramForm from "../common/form/ProgramForm";
import MemberTable from "../common/memberTable/MemberTable";
import { AttendStatus } from "@/types/member";

export interface Members {
  beforeAttendStatus: AttendStatus;
  afterAttendStatus: AttendStatus;
}

const ProgramEditForm = ({ programId, programInfo }) => {
  const formData = useProgramFormData(programInfo);
  const [members, setMembers] = useState<Map<number, Members>>(new Map());

  const updateMembers = (
    memberId: number,
    before: AttendStatus,
    after: AttendStatus,
  ) => {
    members.set(memberId, {
      beforeAttendStatus: before,
      afterAttendStatus: after,
    });
  };

  return (
    <ProgramForm formType="edit" formData={formData}>
      <MemberTable
        formType="edit"
        members={members}
        setMembers={updateMembers}
        programId={programId}
      />
    </ProgramForm>
  );
};
export default ProgramEditForm;
