import {
  ProgramCategory,
  ProgramCategoryWithAll,
  ProgramStatus,
} from "@/types/program";
import { TabOption } from "@/types/tab";

const LIST_SIZE = 6;

type ProgramCategoryTab = {
  [key in ProgramCategory]: TabOption<ProgramCategory>;
};

type ProgramCategoryWithAllTab = {
  [key in ProgramCategoryWithAll]: TabOption<ProgramCategoryWithAll>;
};

type ProgramStatusTab = {
  [key in ProgramStatus]: TabOption<ProgramStatus>;
};

const CATEGORY_TAB: ProgramCategoryTab = {
  weekly: {
    type: "weekly",
    text: "주간발표",
  },
  presidentTeam: {
    type: "presidentTeam",
    text: "회장단",
  },
  eventTeam: {
    type: "eventTeam",
    text: "행사부",
  },
  etc: {
    type: "etc",
    text: "기타",
  },
};

const CATEGORY_TAB_WITH_ALL: ProgramCategoryWithAllTab = {
  all: {
    type: "all",
    text: "전체",
  },
  ...CATEGORY_TAB,
};

const STATUS_TAB: ProgramStatusTab = {
  active: { type: "active", text: "진행중" },
  end: { type: "end", text: "종료" },
};

Object.freeze(CATEGORY_TAB);
Object.freeze(CATEGORY_TAB_WITH_ALL);
Object.freeze(STATUS_TAB);

export default { LIST_SIZE, CATEGORY_TAB, CATEGORY_TAB_WITH_ALL, STATUS_TAB };
