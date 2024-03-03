import { useQuery } from "@tanstack/react-query";
import {
  getMembersByActiveStatus,
  getProgramMembersByActiveStatus,
  getProgramMembersByAttendStatus,
} from "@/apis/member";
import API from "@/constants/API";
import { ActiveStatusWithAll, AttendStatus } from "@/types/member";

export const useGetMemberByActive = (activeStatus: ActiveStatusWithAll) => {
  return useQuery({
    queryKey: [API.MEMBER.LIST, activeStatus],
    queryFn: () => getMembersByActiveStatus(activeStatus),
  });
};

interface GetProgramMemebersByActive {
  status: ActiveStatusWithAll;
  programId: number;
}
interface GetProgramMemebersByAttend {
  status: AttendStatus;
  programId: number;
}

export const useGetProgramMembersByActive = ({
  programId,
  status,
}: GetProgramMemebersByActive) => {
  return useQuery({
    queryKey: [API.MEMBER.ACTIVE_STATUS(programId), status],
    queryFn: () => getProgramMembersByActiveStatus(programId, status),
  });
};

export const useGetProgramMembersByAttend = ({
  programId,
  status,
}: GetProgramMemebersByAttend) => {
  return useQuery({
    queryKey: [API.MEMBER.ATTEND_STATUS(programId), status],
    queryFn: () => getProgramMembersByAttendStatus(programId, status),
  });
};
