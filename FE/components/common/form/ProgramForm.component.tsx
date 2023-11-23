import { useState } from "react";
import Button from "../Button.component";
import Calendar from "../Calendar.component";
import MarkdownEditor from "../markdown/MarkdownEditor.component";
import MemberTable from "../memberTable/MemberTable.component";
import MemberTableItem from "../memberTable/MemberTableItem.component";
import LabeledInput from "./LabeledInput.component";
import ProgramCategoryTab, {
  programCategory,
} from "./ProgramCategoryTab.component";
import { defaultMember } from "@/src/apis/types/member";
import FORM_INFO from "@/src/constants/FORM_INFO";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import { convertDate } from "@/src/utils/date";

// FIXME: 임시저장이 서버로 넘어가면 jotai로 관리 X
interface ProgramFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formReset?: () => void;
  defaultData: {
    title: string;
    setTitle:
      | React.Dispatch<React.SetStateAction<string>>
      | ((v: string) => void);
    content: string;
    setContent:
      | React.Dispatch<React.SetStateAction<string>>
      | ((v: string) => void);
    programDate: string;
    setProgramDate:
      | React.Dispatch<React.SetStateAction<string>>
      | ((v: string) => void);
  };
  submitText?: string;
  isEdit: boolean;
}

const memberList: defaultMember[] = [
  { memberId: 1, name: "김민수", generation: "1", attendStatus: "attend" },
  { memberId: 2, name: "김민수", generation: "1", attendStatus: "attend" },
  { memberId: 3, name: "김민수", generation: "1", attendStatus: "attend" },
  { memberId: 4, name: "김민수", generation: "1", attendStatus: "attend" },
  { memberId: 5, name: "김민수", generation: "1", attendStatus: "attend" },
];

const ProgramForm = ({
  handleSubmit,
  formReset,
  defaultData,
  submitText = "제출",
  isEdit,
}: ProgramFormProps) => {
  const { title, setTitle, content, setContent, programDate, setProgramDate } =
    defaultData;
  const [date, setDate] = useState<Date | undefined>(
    new Date(parseInt(programDate)) || new Date(),
  );
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));
  const [category, setCategory] = useState<programCategory>("weekly");
  const [isDemand, setIsDemand] = useState<boolean>(false);
  const [members, setMembers] = useState(memberList);

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    setProgramDate(
      date?.getTime().toString() || new Date().getTime().toString(),
    );
  };

  return (
    <form
      className="mb-12 mt-8 flex w-full flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <div className="absolute right-0 top-0 flex gap-2">
          <label className="text-sm font-bold">수요조사 등록하기</label>
          <input
            type="checkbox"
            className="accent-primary"
            checked={isDemand}
            onChange={() => setIsDemand((prev) => !prev)}
          />
        </div>
        <LabeledInput
          id={FORM_INFO.PROGRAM.TITLE.id}
          type={FORM_INFO.PROGRAM.TITLE.type}
          label={FORM_INFO.PROGRAM.TITLE.label}
          placeholder={FORM_INFO.PROGRAM.TITLE.placeholder}
          value={isDemand ? `[수요조사] ${title}` : title}
          onChange={(e) =>
            setTitle(e.target.value.replace(/^\[수요조사\] /, ""))
          }
        />
      </div>
      <div className="flex gap-8">
        <div
          onClick={() => setOpenCalender(true)}
          className="relative w-full"
          ref={calenderRef}
        >
          <LabeledInput
            id={FORM_INFO.PROGRAM.DATE.id}
            type={FORM_INFO.PROGRAM.DATE.type}
            label={FORM_INFO.PROGRAM.DATE.label}
            placeholder={FORM_INFO.PROGRAM.DATE.placeholder}
            value={convertDate(programDate)}
          />
          {openCalender && (
            <Calendar date={date} handleDateChange={handleDateChange} />
          )}
        </div>
        <ProgramCategoryTab selected={category} onSelect={setCategory} />
      </div>
      <MarkdownEditor
        id={FORM_INFO.PROGRAM.CONTENT.id}
        label={FORM_INFO.PROGRAM.CONTENT.label}
        placeholder={FORM_INFO.PROGRAM.CONTENT.placeholder}
        value={content}
        onChange={(e) => setContent(e || "")}
      />
      <MemberTable>
        {members.map((member) => (
          <MemberTableItem
            data={member}
            isEdit={isEdit}
            setMemberList={setMembers}
          />
        ))}
      </MemberTable>
      <div className="mt-6 flex w-full justify-end gap-2">
        <Button type="submit">{submitText}</Button>
        {formReset && (
          <Button color="gray" onClick={formReset}>
            취소
          </Button>
        )}
      </div>
    </form>
  );
};
export default ProgramForm;
