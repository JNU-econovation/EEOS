import { attendStatusLower, defaultMember } from "@/src/apis/types/member";
import classNames from "classnames";
import Image from "next/image";

interface MemberListItemProps {
  memberData: defaultMember;
  attendStatus: attendStatusLower;
}

const MemberListItem = ({ memberData, attendStatus }: MemberListItemProps) => {
  const { memberId, generation, name } = memberData;

  const memberListItemClass = classNames(
    "flex h-[28px] w-[28px] items-center justify-center rounded-full",
    {
      "bg-tertiary": attendStatus === "attend",
      "bg-error": attendStatus !== "attend",
    },
  );
  return (
    <div className="m-2 grid grid-cols-[3rem_7rem] border-b-[1px] border-gray-base px-6 py-5">
      <div className={memberListItemClass}>
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
