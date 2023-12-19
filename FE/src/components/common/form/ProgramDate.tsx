"use client";

import useOutsideRef from "@/hooks/useOutsideRef";
import { useState } from "react";
import LabeledInput from "./LabeledInput";
import FORM_INFO from "@/constants/FORM_INFO";
import { convertDate } from "@/utils/convert";
import Calendar from "../Calendar";

interface ProgramDateInputProps {
  programDate: string;
  setProgramDate: (date: string) => void;
}

const ProgramDateInput = ({
  programDate,
  setProgramDate,
}: ProgramDateInputProps) => {
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideRef(() => setOpenCalender(false));
  const [date, setDate] = useState<Date | undefined>(
    new Date(parseInt(programDate)) || new Date(),
  );

  const handleDateChange = (date: Date | undefined) => {
    setDate(date);
    setProgramDate(
      date?.getTime().toString() || new Date().getTime().toString(),
    );
  };

  return (
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
  );
};
export default ProgramDateInput;
