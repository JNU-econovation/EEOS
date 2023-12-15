import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import ROUTES from "@/constants/ROUTES";
import {
  GetProgramListRequest,
  PatchProgramRequest,
  PostProgramRequest,
  deleteProgram,
  getProgramById,
  getProgramList,
  patchProgram,
  postProgram,
} from "@/apis/program";
import API from "@/constants/API";
import { useEffect } from "react";

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
      data && router.replace(ROUTES.DETAIL(data.programId));
    },
  });
};

export const useUpdateProgram = ({ programId, body }: PatchProgramRequest) => {
  const router = useRouter();
  return useMutation({
    mutationKey: [API.PROGRAM.UPDATE(programId)],
    mutationFn: () => patchProgram({ programId, body }),
    onSettled: (data) => {
      data && router.replace(ROUTES.DETAIL(data.programId));
    },
  });
};

export const useDeleteProgram = (programId: number) => {
  return useMutation({
    mutationKey: [API.PROGRAM.DELETE(programId)],
    mutationFn: () => deleteProgram(programId),
  });
};

export const useGetProgramById = (programId: number) => {
  return useQuery({
    queryKey: [API.PROGRAM.DETAIL(programId)],
    queryFn: () => getProgramById(programId),
  });
};

export const useGetProgramList = ({
  category,
  programStatus,
  size,
  page,
}: GetProgramListRequest) => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: [API.PROGRAM.LIST, category, programStatus, size, page],
    queryFn: () => getProgramList({ category, programStatus, size, page }),
    select: (data) => ({
      totalPage: data.totalPage,
      programs: data.programs,
    }),
  });

  useEffect(() => {
    queryClient.setQueryData(
      [API.PROGRAM.LIST, category, programStatus, size, page],
      result.data,
    );
  }, [result]);

  return result;
};
