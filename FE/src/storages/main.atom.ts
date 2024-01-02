import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import { atom } from "jotai";
import { atomWithHash } from "jotai-location";

export const pageAtom = atomWithHash("page", 1);
export const programCategoryAtom = atomWithHash<ProgramCategoryWithAll>(
  "programCategory",
  "all",
);
export const programStatusAtom = atomWithHash<ProgramStatus>(
  "programType",
  "active",
);
export const totalPageAtom = atom<number>(1);
