"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import CheckBox from "../common/CheckBox.component";
import Toggle from "../common/Toggle.component";
import { updateMembers } from "@/src/apis/member";
import { defaultMember } from "@/src/apis/types/member";

interface EditMemberListItemProps {
  data: defaultMember;
}

const EditMemberListItem = ({ data }: EditMemberListItemProps) => {
  const queryClient = useQueryClient();

  const { memberId, name, generation, attendStatus } = data;
  const isRelated = attendStatus === "IRRELEVANT" ? false : true;
  const isAttend = attendStatus === "ATTEND" ? true : false;

  const { mutate: updateMemberMutate } = useMutation(
    () =>
      updateMembers(memberId, {
        memberId: memberId,
        beforeAttendStatus: attendStatus,
        afterAttendStatus: getAfterAttendStatus(),
      }),
    { onSettled: () => queryClient.invalidateQueries(["editEditMemberList"]) },
  );

  const getAfterAttendStatus = () => {
    if (isAttend) return "ATTEND";
    if (isRelated) return "ABSENT";
    return "IRRELEVANT";
  };
  const handleCheckBoxChange = () => {
    updateMemberMutate();
  };
  const handleToggleChange = () => {
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
