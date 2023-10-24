import { attendStatusLower, defaultMember } from "@/src/apis/types/member";
import Image from "next/image";

interface MemberListItemProps {
  memberData: defaultMember;
  attendStatus: attendStatusLower;
}

const MemberListItem = ({ memberData, attendStatus }: MemberListItemProps) => {
  const { memberId, generation, name } = memberData;
  const color = attendStatus === "attend" ? "bg-tertiary" : "bg-error";
  return (
    <div className="grid grid-cols-[3rem_7rem] px-6 py-5 border-b-[1px] border-gray-base m-2">
      <div
        className={`flex justify-center items-center w-[28px] h-[28px] rounded-full ${color}`}
      >
        <Image src="/icons/check.svg" alt="check" width={20} height={20} />
      </div>
      <div className="flex gap-2 self-center">
        <span>{generation}기</span>
        <span>{name}</span>
      </div>
    </div>
  );
};
export default MemberListItem;
