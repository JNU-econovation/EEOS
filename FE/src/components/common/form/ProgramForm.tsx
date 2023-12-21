"use client";

import { ProgramCategory } from "@/types/program";
import Tab from "../tabs/Tab";
import ProgramDate from "./ProgramDate";
import ProgramDemandCheckBox from "./ProgramDemandCheckBox";
import ProgramTitle from "./ProgramTitle";
import PROGRAM from "@/constants/PROGRAM";
import { PropsWithChildren } from "react";
import FormBtn from "./FormBtn";
import FORM_INFO from "@/constants/FORM_INFO";
import { FormType } from "@/types/form";
import MarkdownEditor from "../markdown/MarkdownEditor";
import { ProgramFormData } from "@/hooks/useProgramFormData";

interface ProgramFormProps {
  formData: ProgramFormData;
  formType: FormType;
}

const ProgramForm = ({
  children,
  formData,
  formType,
}: PropsWithChildren<ProgramFormProps>) => {
  const {
    title,
    setTitle,
    deadLine,
    setDeadLine,
    category,
    setCategory,
    type,
    setType,
    content,
    setContent,
    reset,
  } = formData;
  const isDemand = type === "demand";
  const demandCheckBoxDisabled = formType === "edit";

  const handleChangeType = () => {
    setType(isDemand ? "notification" : "demand");
  };

  return (
    <form className="space-y-6">
      <ProgramTitle title={title} setTitle={(v) => setTitle(v)}>
        <ProgramDemandCheckBox
          disabled={demandCheckBoxDisabled}
          isDemand={isDemand}
          onClick={() => handleChangeType()}
        />
      </ProgramTitle>
      <div className="flex items-end gap-8">
        <ProgramDate
          programDate={deadLine}
          setProgramDate={(v) => setDeadLine(v)}
        />
        <Tab<ProgramCategory>
          options={Object.values(PROGRAM.CATEGORY_TAB)}
          selected={category}
          onItemClick={(v) => setCategory(v)}
          size="lg"
          baseColor="gray"
          pointColor="yellow"
          align="line"
        />
      </div>
      <MarkdownEditor
        id={FORM_INFO.PROGRAM.CONTENT.id}
        label={FORM_INFO.PROGRAM.CONTENT.label}
        placeholder={FORM_INFO.PROGRAM.CONTENT.placeholder}
        value={content}
        onChange={(v) => setContent(v)}
      />
      {children}
      <FormBtn submitText={FORM_INFO.SUBMIT_TEXT[formType]} formReset={reset} />
    </form>
  );
};

export default ProgramForm;
