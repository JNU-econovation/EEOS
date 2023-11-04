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
  const [isRelated, setIsRelated] = useState(attendStatus !== "none");
  const [isAttend, setIsAttend] = useState(attendStatus === "attend");

  const { mutate: updateMemberMutate } = useMutation(
    () =>
      updateMembers(programId, {
        memberId: memberId,
        beforeAttendStatus: attendStatus,
        afterAttendStatus: getAfterAttendStatus(),
      }),
    { onSettled: () => queryClient.invalidateQueries(["editEditMemberList"]) },
  );

  const getAfterAttendStatus = () => {
    if (isAttend) return "attend";
    if (isRelated) return "absent";
    return "none";
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
    <div className="grid grid-cols-[4.5rem_6.75rem_1fr_4rem] gap-4 px-10 py-7 odd:bg-soft_secondary even:bg-background">
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
