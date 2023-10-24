import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./styles/calendar.styles.css";

interface CalendarProps {
  date: Date | undefined;
  handleDateChange: (date: Date | undefined) => void;
}

const Calendar = ({ date, handleDateChange }: CalendarProps) => {
  const disabledDays = { before: new Date() };

  return (
    <DayPicker
      mode="single"
      selected={date}
      onSelect={handleDateChange}
      disabled={disabledDays}
      className="absolute left-0 top-[4.5rem] z-10 rounded-md bg-background p-3 shadow-md"
    />
  );
};
export default Calendar;
