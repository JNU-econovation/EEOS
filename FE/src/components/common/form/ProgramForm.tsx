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

interface ProgramFormProps {
  formType: FormType;
}

const ProgramForm = ({
  children,
  formType,
}: PropsWithChildren<ProgramFormProps>) => {
  const demandDisabled = formType === "edit";

  return (
    <form className="space-y-6">
      <ProgramTitle title={"test"} setTitle={() => {}}>
        <ProgramDemandCheckBox
          disabled={demandDisabled}
          isDemand={true}
          onClick={() => {}}
        />
      </ProgramTitle>
      <div className="flex items-end gap-8">
        <ProgramDate programDate={"123456789"} setProgramDate={() => {}} />
        <Tab<ProgramCategory>
          options={Object.values(PROGRAM.CATEGORY_TAB)}
          selected={"weekly"}
          onItemClick={() => {}}
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
        value={"test"}
        onChange={() => {}}
      />
      {children}
      <FormBtn
        submitText={FORM_INFO.SUBMIT_TEXT[formType]}
        formReset={() => {}}
      />
    </form>
  );
};

export default ProgramForm;
