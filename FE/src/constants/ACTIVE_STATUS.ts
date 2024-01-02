import { ActiveStatus, ActiveStatusWithAll } from "@/types/member";
import { TabOption } from "@/types/tab";

const TAB: TabOption<ActiveStatus>[] = [
  { type: "am", text: "AM" },
  { type: "rm", text: "RM" },
  { type: "cm", text: "CM" },
  { type: "ob", text: "OB" },
];

const TAB_WITH_ALL: TabOption<ActiveStatusWithAll>[] = [
  ...TAB,
  { type: "all", text: "All" },
];

Object.freeze(TAB);
Object.freeze(TAB_WITH_ALL);

export default { TAB, TAB_WITH_ALL };
