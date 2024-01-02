import React, { PropsWithChildren } from "react";
import LabeledInput from "./LabeledInput";
import FORM_INFO from "@/constants/FORM_INFO";

interface ProgramTitleProps {
  title: string;
  setTitle: (title: string) => void;
  prefix?: string;
}

const ProgramTitle = ({
  title,
  setTitle,
  prefix,
  children,
}: PropsWithChildren<ProgramTitleProps>) => {
  return (
    <div className="relative">
      {children}
      <LabeledInput
        id={FORM_INFO.PROGRAM.TITLE.id}
        type={FORM_INFO.PROGRAM.TITLE.type}
        label={FORM_INFO.PROGRAM.TITLE.label}
        placeholder={FORM_INFO.PROGRAM.TITLE.placeholder}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        prefix={prefix}
      />
    </div>
  );
};
export default ProgramTitle;
