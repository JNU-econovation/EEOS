import { useState } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor.component";
import MemberTable from "../memberTable/MemberTable.component";
import FormButton from "./FormButton.component";
import ProgramCategoryTab, {
  programCategory,
} from "./ProgramCategoryTab.component";
import ProgramDateInput from "./ProgramDateInput.component";
import ProgramTitleAndDemandInput from "./ProgramTitleAndDemandInput.component";
import FORM_INFO from "@/src/constants/FORM_INFO";
import { MemberInfo } from "@/src/types/member";

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
  memberList: MemberInfo[];
}

const ProgramForm = ({
  handleSubmit,
  formReset,
  defaultData,
  submitText = "제출",
  isEdit,
  memberList,
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
