import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";

export const DEFAULT_QUERY: {
  category: ProgramCategoryWithAll;
  status: ProgramStatus;
  page: number;
} = {
  category: "all",
  status: "active",
  page: 1,
};

Object.freeze(DEFAULT_QUERY);
export default { DEFAULT_QUERY };
