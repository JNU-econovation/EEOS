"use client";

import useOutsideRef from "@/hooks/useOutsideRef";
import { Dispatch, SetStateAction, useState } from "react";
import LabeledInput from "../LabeledInput";
import FORM_INFO from "@/constants/FORM_INFO";
import { convertDate } from "@/utils/convert";
import Calendar from "../../calendar/Calendar";

interface ProgramDateProps {
  programDate: string;
  setProgramDate: Dispatch<SetStateAction<string>>;
}

const ProgramDate = ({ programDate, setProgramDate }: ProgramDateProps) => {
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

  const handleCalenderOpen = () => {
    setOpenCalender(true);
  };

  return (
    <div
      onClick={handleCalenderOpen}
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
export default ProgramDate;
