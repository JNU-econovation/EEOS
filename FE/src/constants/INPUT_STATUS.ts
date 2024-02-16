import { TabOption } from "@/types/tab";
import { InputStatus } from "@/types/teamBuilding";

export interface InputStatusToggleOption extends TabOption<InputStatus> {
  color: string;
}

type InputStatusToggle = {
  [key in InputStatus]: InputStatusToggleOption;
};

type InputStatusList = {
  [key in InputStatus]: TabOption<InputStatus> & {
    icon: string;
    color: string;
  };
};

const TOGGLE: InputStatusToggle = {
  incomplete: { type: "incomplete", text: "입력해주세요!", color: "teal" },
  complete: { type: "complete", text: "입력 완료", color: "green" },
};

const LIST: InputStatusList = {
  complete: {
    type: "complete",
    text: "입력",
    icon: "/icons/check.svg",
    color: "green",
  },
  incomplete: {
    type: "incomplete",
    text: "미입력",
    icon: "/icons/minus.svg",
    color: "gray",
  },
};

Object.freeze(TOGGLE);
Object.freeze(LIST);

export default { TOGGLE, LIST };
