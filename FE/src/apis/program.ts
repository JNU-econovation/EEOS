import {
  createProgramRequest,
  createProgramResponse,
  getProgramDetailResponse,
  getProgramListResponse,
  updateProgramRequest,
} from "./types/program";
import { https } from ".";
import API from "@/src/constants/API";

export const createProgram = async (body: createProgramRequest) => {
  const { data } = await https<createProgramResponse>({
    url: API.PROGRAM,
    method: "POST",
    data: body,
  });
  return data.data;
};

export const updateProgram = async (
  programId: string,
  body: updateProgramRequest,
) => {
  const { data } = await https({
    url: API.PROGRAM + `/${programId}`,
    method: "PUT",
    data: body,
  });
  return data.data;
};

export const getProgramList = async (
  programStatus: string,
  size: number,
  page: number,
) => {
  const { data } = await https<getProgramListResponse>({
    url: API.PROGRAM,
    method: "GET",
    params: { programStatus, size, page },
  });

  return data.data;
};

export const getProgramDetail = async (programId: string) => {
  const { data } = await https<getProgramDetailResponse>({
    url: API.PROGRAM + `/${programId}`,
    method: "GET",
  });

  return data.data;
};
