import { useGetProgramMembersByAttend } from "@/hooks/query/useMemberQuery";
import { AttendStatus } from "@/types/member";
import AttendeeStatus from "./AttendeeStatus";
import { useQueryClient } from "@tanstack/react-query";
import { ProgramType } from "@/types/program";
import AttendeeInfoLoader from "./AttendeeInfo.loader";
import MemberList from "@/components/common/MemberList";

interface AttendeeInfoProps {
  programId: number;
  status: AttendStatus;
}

const AttendeeInfo = ({ programId, status }: AttendeeInfoProps) => {
  const queryClient = useQueryClient();

  const {
    data: members,
    isLoading,
    isError,
  } = useGetProgramMembersByAttend({
    programId: programId,
    status,
  });

  if (isLoading) return <AttendeeInfoLoader />;
  if (isError) return <></>;

  const programType = queryClient.getQueryData<ProgramType>([
    "programType",
    programId,
  ]);

  const isRender =
    programType === "demand" && status === "nonResponse" ? false : true;

  return (
    <>
      {isRender && (
        <div>
          <AttendeeStatus status={status} members={members} />
          <MemberList members={members} />
        </div>
      )}
    </>
  );
};
export default AttendeeInfo;
