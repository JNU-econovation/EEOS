import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getMyActiveStatus,
  getMyAttendStatus,
  putMyActiveStatus,
  putMyAttendStatus,
} from "../apis/user";
import API from "../constants/API";
import { ActiveStatus, AttendStatus } from "../types/member";

const queryClient = useQueryClient();

export const useGetMyActiveStatus = () => {
  return useQuery({
    queryKey: [API.USER.ACTIVE_STATUS],
    queryFn: () => getMyActiveStatus(),
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
  afterAttendStatus: AttendStatus;
}

export const usePutMyAttendStatus = ({
  programId,
  beforeAttendStatus,
  afterAttendStatus,
}: PutMyAttendStatus) => {
  return useMutation({
    mutationKey: [API.USER.ATTEND_STATUS],
    mutationFn: () =>
      putMyAttendStatus(programId, { beforeAttendStatus, afterAttendStatus }),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [API.USER.ATTEND_STATUS] }),
  });
};
