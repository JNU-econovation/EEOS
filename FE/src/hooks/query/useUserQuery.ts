import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMyActiveStatus,
  getMyAttendStatus,
  putMyActiveStatus,
  putMyAttendStatus,
} from "@/apis/user";
import API from "@/constants/API";
import { ActiveStatus, AttendStatus } from "@/types/member";

export const useGetMyActiveStatus = () => {
  return useQuery({
    queryKey: [API.USER.ACTIVE_STATUS],
    queryFn: getMyActiveStatus,
    suspense: true,
  });
};

export const usePutMyActiveStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: [API.USER.ACTIVE_STATUS],
    mutationFn: (activeStatus: ActiveStatus) =>
      putMyActiveStatus({ activeStatus }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [API.USER.ACTIVE_STATUS] });
    },
  });
};

export const useGetMyAttendStatus = (programId: number) => {
  return useQuery({
    queryKey: [API.USER.ATTEND_STATUS(programId)],
    queryFn: () => getMyAttendStatus(programId),
  });
};

interface PutMyAttendStatus {
  programId: number;
  beforeAttendStatus: AttendStatus;
}

export const usePutMyAttendStatus = ({
  programId,
  beforeAttendStatus,
}: PutMyAttendStatus) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [API.USER.ATTEND_STATUS],
    mutationFn: (afterAttendStatus: AttendStatus) =>
      putMyAttendStatus(programId, {
        beforeAttendStatus,
        afterAttendStatus: afterAttendStatus,
      }),
    onSettled: (data) => {
      queryClient.invalidateQueries({
        queryKey: [API.USER.ATTEND_STATUS(programId)],
      });
      const statuses: AttendStatus[] = [
        "attend",
        "late",
        "absent",
        "nonResponse",
      ];
      statuses.forEach((status) => {
        queryClient.invalidateQueries({
          queryKey: [API.MEMBER.ATTEND_STATUS(programId), status],
        });
      });
    },
  });
};
