import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./styles/calendar.css";

interface CalendarProps {
  programDate: Date | undefined;
  setProgramDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

const Calendar = ({ programDate, setProgramDate }: CalendarProps) => {
  const disabledDays = { before: new Date() };
  return (
    <DayPicker
      mode="single"
      selected={programDate}
      onSelect={setProgramDate}
      disabled={disabledDays}
      className="absolute left-0 top-[4.5rem] z-10 rounded-md bg-background p-3 shadow-md"
    />
  );
};
export default Calendar;
