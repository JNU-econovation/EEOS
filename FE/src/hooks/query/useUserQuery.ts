import {
  getMyActiveStatus,
  getMyAttendStatus,
  putMyActiveStatus,
  putMyAttendStatus,
} from "@/apis/user";
import API from "@/constants/API";
import { ActiveStatus, AttendStatus } from "@/types/member";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetMyActiveStatus = () => {
  return useQuery({
    queryKey: [API.USER.ACTIVE_STATUS],
    queryFn: getMyActiveStatus,
    suspense: true,
  });
};

export const usePutMyActiveStatus = (activeStatus: ActiveStatus) => {
  return useMutation({
    mutationKey: [API.USER.ACTIVE_STATUS],
    mutationFn: () => putMyActiveStatus({ activeStatus }),
  });
};

export const useGetMyAttendStatus = (programId: number) => {
  return useQuery({
    queryKey: [API.USER.ATTEND_STATUS],
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
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [API.USER.ATTEND_STATUS] }),
  });
};
