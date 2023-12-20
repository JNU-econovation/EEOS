"use client";

import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import CheckBox from "../common/CheckBox";
import { MemberActiveStatusInfoDto } from "@/apis/dtos/member.dto";

interface CreateMemberTableItemProps {
  data: MemberActiveStatusInfoDto;
  members: Set<number>;
  setMembers: (members: Set<number>) => void;
}

const CreateMemberTableItem = ({
  data,
  members,
  setMembers,
}: CreateMemberTableItemProps) => {
  const { memberId, name, activeStatus } = data;
  const isRelated = members.has(memberId);

  const handleCheckBoxChange = () => {
    const newMembers = new Set<number>(members);
    isRelated ? newMembers.delete(memberId) : newMembers.add(memberId);
    setMembers(newMembers);
  };

  return (
    <div className="grid h-20 grid-cols-[4.75rem_7rem_7.25rem_1fr_20.5rem] items-center justify-items-center gap-4 border-b-2 border-stroke-10 bg-background px-10">
      <CheckBox checked={isRelated} onClick={handleCheckBoxChange} />
      <span>{ACTIVE_STATUS.TAB[activeStatus].text}</span>
      <span className="font-bold">{name}</span>
    </div>
  );
};
export default CreateMemberTableItem;
