import { useState } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor.component";
import MemberTable from "../memberTable/MemberTable.component";
import FormButton from "./FormButton.component";
import ProgramCategoryTab, {
  programCategory,
} from "./ProgramCategoryTab.component";
import ProgramDateInput from "./ProgramDateInput.component";
import ProgramTitleAndDemandInput from "./ProgramTitleAndDemandInput.component";
import { defaultMember } from "@/src/apis/types/member";
import FORM_INFO from "@/src/constants/FORM_INFO";

interface ProgramFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formReset: () => void;
  defaultData: {
    title: string;
    setTitle: (v: string) => void;
    content: string;
    setContent: (v: string) => void;
    programDate: string;
    setProgramDate: (v: string) => void;
  };
  submitText?: string;
  isEdit: boolean;
}

// FIXME: memberList props로 받아오기
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
  const [category, setCategory] = useState<programCategory>("weekly");
  const [isDemand, setIsDemand] = useState<boolean>(false);

  return (
    <form
      className="mb-12 mt-8 flex w-full flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <ProgramTitleAndDemandInput
        title={title}
        setTitle={setTitle}
        isDemand={isDemand}
        setIsDemand={() => setIsDemand((prev) => !prev)}
      />
      <div className="flex gap-8">
        <ProgramDateInput
          programDate={programDate}
          setProgramDate={setProgramDate}
        />
        <ProgramCategoryTab selected={category} onSelect={setCategory} />
      </div>
      <MarkdownEditor
        id={FORM_INFO.PROGRAM.CONTENT.id}
        label={FORM_INFO.PROGRAM.CONTENT.label}
        placeholder={FORM_INFO.PROGRAM.CONTENT.placeholder}
        value={content}
        onChange={(e) => setContent(e || "")}
      />
      <MemberTable members={memberList} isEdit={isEdit} />
      <FormButton submitText={submitText} formReset={formReset} />
    </form>
  );
};
export default ProgramForm;
