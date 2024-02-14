"use client";

import useTeamBuildingFormData from "@/hooks/useTeamBuildingFormData";
import TeamBuildingForm from "../common/form/teamBuilding/TeamBuildingForm";
import MemberTable from "../common/memberTable/MemberTable";
import { toast } from "react-toastify";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const TeamBuildingCreateForm = () => {
  const queryClient = useQueryClient();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());
  const formData = useTeamBuildingFormData();
  const { title, content, minTeamSize, maxTeamSize, reset } = formData;

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
    if (!title || !content || !minTeamSize || !maxTeamSize) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }
  };

  return (
    <TeamBuildingForm formType="create" onSubmit={handleSubmit} {...formData}>
      <MemberTable
        formType="create"
        members={members}
        setMembers={updateMembers}
        onClickHeaderCheckBox={updateAllMembers}
      />
    </TeamBuildingForm>
  );
};

export default TeamBuildingCreateForm;