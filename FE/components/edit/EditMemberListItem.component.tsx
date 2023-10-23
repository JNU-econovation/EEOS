"use client";

import { defaultMember } from "@/src/apis/types/member";
import CheckBox from "../common/CheckBox.component";
import Toggle from "../common/Toggle.component";
import { useState } from "react";
import { editMembers } from "@/src/apis/member/member";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface EditMemberListItemProps {
  data: defaultMember;
}

const EditMemberListItem = ({ data }: EditMemberListItemProps) => {
  const queryClient = useQueryClient();
  const { memberId, name, generation, attendStatus } = data;
  const isRelated = attendStatus === "IRRELEVANT" ? false : true;
  const isAttend = attendStatus === "ATTEND" ? true : false;

  console.log(data, isRelated, isAttend);

  const { mutate: updateMemberMutate } = useMutation(
    () =>
      editMembers(memberId, {
        memberId: memberId,
        beforeAttendStatus: attendStatus,
        afterAttendStatus: isAttend
          ? "ATTEND"
          : isRelated
          ? "ABSENT"
          : "IRRELEVANT",
      }),
    { onSettled: () => queryClient.invalidateQueries(["editEditMemberList"]) }
  );

  const handleCheckBoxChange = () => {
    updateMemberMutate();
  };

  const handleToggleChange = () => {
    updateMemberMutate();
  };
  return (
    <div className="grid grid-cols-[4.5rem_6.75rem_1fr_4rem] gap-4 px-10 py-7 even:bg-background odd: bg-soft_secondary">
      <CheckBox checked={isRelated} onChange={handleCheckBoxChange} />
      <span className="font-bold">{name}</span>
      <span>{generation}</span>
      <Toggle
        active={isAttend}
        onChange={handleToggleChange}
        disabled={!isRelated}
      />
    </div>
  );
};
export default EditMemberListItem;
