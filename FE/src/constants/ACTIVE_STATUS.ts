import { ActiveStatus, ActiveStatusWithAll } from "@/types/member";
import { TabOption } from "@/types/tab";

type ActiveStatusTab = {
  [key in ActiveStatus]: TabOption<ActiveStatus>;
};
type ActiveStatusWithAllTab = {
  [key in ActiveStatusWithAll]: TabOption<ActiveStatusWithAll>;
};

const TAB: ActiveStatusTab = {
  am: { type: "am", text: "AM" },
  rm: { type: "rm", text: "RM" },
  cm: { type: "cm", text: "CM" },
  ob: { type: "ob", text: "OB" },
};

const TAB_WITH_ALL: ActiveStatusWithAllTab = {
  all: { type: "all", text: "All" },
  ...TAB,
};

Object.freeze(TAB);
Object.freeze(TAB_WITH_ALL);

export default { TAB, TAB_WITH_ALL };
