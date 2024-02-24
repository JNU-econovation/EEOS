import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  GetProgramListRequest,
  PatchProgramRequest,
  PostProgramRequest,
  deleteProgram,
  getProgramAccessRight,
  getProgramById,
  getProgramList,
  patchProgram,
  postProgram,
} from "@/apis/program";
import API from "@/constants/API";
import ROUTES from "@/constants/ROUTES";
import { ActiveStatusWithAll } from "@/types/member";
import { ProgramStatus, ProgramType } from "@/types/program";

interface CreateProgram {
  programData: PostProgramRequest;
  formReset: () => void;
}

export const useCreateProgram = ({ programData, formReset }: CreateProgram) => {
  const router = useRouter();

  return useMutation({
    mutationKey: [API.PROGRAM.CREATE],
    mutationFn: () => postProgram(programData),
    onSettled: (data) => {
      formReset();
      data && router.replace(ROUTES.DETAIL(data?.programId));
    },
  });
};

export const useUpdateProgram = ({ programId, body }: PatchProgramRequest) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [API.PROGRAM.UPDATE(programId)],
    mutationFn: () => patchProgram({ programId, body }),
    onSettled: (data) => {
      data && router.replace(ROUTES.DETAIL(data?.programId));
      const statuses: ActiveStatusWithAll[] = ["all", "am", "cm", "rm", "ob"];
      statuses.forEach((status) => {
        queryClient.invalidateQueries([
          API.MEMBER.ACTIVE_STATUS(programId),
          status,
        ]);
      });
    },
  });
};

export const useDeleteProgram = (programId: number) => {
  const router = useRouter();

  return useMutation({
    mutationKey: [API.PROGRAM.DELETE(programId)],
    mutationFn: () => deleteProgram(programId),
    onSettled: () => {
      router.replace(ROUTES.MAIN);
    },
  });
};

export const useGetProgramById = (programId: number) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: [API.PROGRAM.DETAIL(programId)],
    queryFn: () =>
      getProgramById(programId).then((res) => {
        queryClient.setQueryData<ProgramStatus>(
          ["programStatus", programId],
          res.programStatus,
        );
        queryClient.setQueryData<ProgramType>(
          ["programType", programId],
          res.type,
        );
        return res;
      }),
  });
};

export const useGetProgramList = ({
  category,
  programStatus,
  size,
  page,
}: GetProgramListRequest) => {
  return useQuery({
    queryKey: [API.PROGRAM.LIST, category, programStatus, size, page],
    queryFn: () => getProgramList({ category, programStatus, size, page }),
    select: (data) => ({
      totalPage: data?.totalPage,
      programs: data?.programs,
    }),
    suspense: true,
  });
};

export const useGetProgramAccessRight = (programId: number) => {
  return useQuery({
    queryKey: [API.PROGRAM.ACCESS_RIGHT(programId)],
    queryFn: () => getProgramAccessRight(programId),
  });
};
