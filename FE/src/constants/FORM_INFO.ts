const PROGRAM = {
  TITLE: {
    id: "program_title",
    type: "text",
    label: "행사 이름",
    placeholder: "행사 이름 입력",
  },
  DATE: {
    id: "program_date",
    type: "text",
    label: "행사 일정",
    placeholder: "XXXX-XX-XX",
  },
  CONTENT: {
    id: "program_content",
    type: "text",
    label: "행사 내용",
    placeholder: "행사 내용 입력",
  },
};

const DEMAND_PREFIX = "[수요조사]";

Object.freeze(PROGRAM);
export default { PROGRAM, DEMAND_PREFIX };
