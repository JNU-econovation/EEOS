"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import CheckBox from "../common/CheckBox.component";
import Toggle from "../common/Toggle.component";
import { updateMembers } from "@/src/apis/member";
import { defaultMember } from "@/src/apis/types/member";

interface EditMemberListItemProps {
  data: defaultMember;
  programId: string;
}

const EditMemberListItem = ({ data, programId }: EditMemberListItemProps) => {
  const queryClient = useQueryClient();

  const { memberId, name, generation, attendStatus } = data;
  const [isRelated, setIsRelated] = useState(attendStatus !== "nonRelated");
  const [isAttend, setIsAttend] = useState(attendStatus === "attend");

  const { mutate: updateMemberMutate } = useMutation(
    () =>
      updateMembers(programId, {
        memberId,
        beforeAttendStatus: attendStatus,
        afterAttendStatus: getAfterAttendStatus(),
      }),
    {
      onSettled: () => queryClient.invalidateQueries(["editEditMemberList"]),
    },
  );

  const getAfterAttendStatus = () => {
    if (!isRelated) return "nonRelated";
    if (isAttend) return "attend";
    return "absent";
  };
  const handleCheckBoxChange = () => {
    setIsRelated((prev) => !prev);
    updateMemberMutate();
  };
  const handleToggleChange = () => {
    setIsAttend((prev) => !prev);
    updateMemberMutate();
  };

  return (
    <div className="grid h-20 grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10">
      <CheckBox checked={isRelated} onChange={handleCheckBoxChange} />
      <span>{generation}</span>
      <span className="font-bold">{name}</span>
      <span></span>
      <Toggle
        active={isAttend}
        onChange={handleToggleChange}
        disabled={!isRelated}
      />
    </div>
  );
};
export default EditMemberListItem;
