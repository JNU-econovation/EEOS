import { atomWithStorage } from "jotai/utils";

export const createTitleAtom = atomWithStorage<string>("title", "");
export const createContentAtom = atomWithStorage<string | undefined>(
  "content",
  "",
);
const currentTime = new Date().getTime().toString();
export const createProgramDateAtom = atomWithStorage<string>(
  "programDate",
  currentTime,
);
