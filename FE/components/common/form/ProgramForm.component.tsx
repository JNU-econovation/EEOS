import { useState } from "react";
import Button from "../Button.component";
import Calendar from "../Calendar.component";
import MarkdownEditor from "../MarkdownEditor.component";
import LabeledInput from "./LabeledInput.component";
import FORM_INFO from "@/src/constants/FORM_INFO";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import { convertDate } from "@/src/utils/date";

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
}

const ProgramForm = ({
  handleSubmit,
  formReset,
  defaultData,
  submitText = "제출",
}: ProgramFormProps) => {
  const { title, setTitle, content, setContent, programDate, setProgramDate } =
    defaultData;
  const [date, setDate] = useState<Date | undefined>(
    new Date(parseInt(programDate)) || new Date(),
  );
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    setProgramDate(
      date?.getTime().toString() || new Date().getTime().toString(),
    );
  };

  return (
    <div className="w-full max-w-xs md:max-w-lg lg:max-w-2xl">
      <form className="mt-8 flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <LabeledInput
          id={FORM_INFO.PROGRAM.TITLE.id}
          type={FORM_INFO.PROGRAM.TITLE.type}
          label={FORM_INFO.PROGRAM.TITLE.label}
          placeholder={FORM_INFO.PROGRAM.TITLE.placeholder}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div
          onClick={() => setOpenCalender(true)}
          className="relative"
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
        <MarkdownEditor
          id={FORM_INFO.PROGRAM.CONTENT.id}
          label={FORM_INFO.PROGRAM.CONTENT.label}
          placeholder={FORM_INFO.PROGRAM.CONTENT.placeholder}
          value={content}
          onChange={(e) => setContent(e || "")}
        />
        <div className="mt-6 flex w-full justify-end gap-2">
          <Button type="submit">{submitText}</Button>
          {formReset && (
            <Button color="gray" onClick={formReset}>
              취소
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
export default ProgramForm;
