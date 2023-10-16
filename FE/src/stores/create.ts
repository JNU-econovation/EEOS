import { atom } from "jotai";

export const createTitleAtom = atom<string>("");
export const createContentAtom = atom<string>("");
export const createDateAtom = atom<Date>(new Date());
export const createProgramDateAtom = atom<string>((get) =>
  get(createDateAtom).getTime().toString()
);
