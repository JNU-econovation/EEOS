import { ProgramCategory, ProgramCategoryWithAll } from "@/types/program";
import { TabOption } from "@/types/tab";

const LIST_SIZE = 6;

const CATEGORY_TAB: TabOption<ProgramCategory>[] = [
  {
    type: "weekly",
    text: "주간발표",
  },
  {
    type: "presidentTeam",
    text: "회장단",
  },
  {
    type: "eventTeam",
    text: "행사",
  },
  {
    type: "etc",
    text: "기타",
  },
];

const CATEGORY_TAB_WITH_ALL: TabOption<ProgramCategoryWithAll>[] = [
  {
    type: "all",
    text: "전체",
  },
  ...CATEGORY_TAB,
];

export default { LIST_SIZE, CATEGORY_TAB, CATEGORY_TAB_WITH_ALL };
