import { defaultMember } from "../apis/types/member";

export const sortMembers = (members: defaultMember[]) => {
  return members
    .filter((member) => member.attendStatus !== "IRRELEVANT")
    .concat(members.filter((member) => member.attendStatus === "IRRELEVANT"));
};
