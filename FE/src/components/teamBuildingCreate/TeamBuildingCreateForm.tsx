"use client";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import TeamBuildingForm from "../common/form/teamBuilding/TeamBuildingForm";
import MemberTable from "../common/memberTable/MemberTable";
import { useCreateTeamBuildingMutation } from "@/hooks/query/useTeamBuildingQuery";
import useTeamBuildingFormData from "@/hooks/useTeamBuildingFormData";

const TeamBuildingCreateForm = () => {
  const queryClient = useQueryClient();
  const [members, setMembers] = useState<Set<number>>(new Set<number>());
  const formData = useTeamBuildingFormData();
  const { title, content, maxTeamSize } = formData;

  const { mutate: createTeamBuilding } = useCreateTeamBuildingMutation();

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
    if (!title || !content || !maxTeamSize) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    createTeamBuilding({
      title,
      content,
      maxTeamSize,
      members: Array.from(members).map((memberId) => ({ memberId })),
    });
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
