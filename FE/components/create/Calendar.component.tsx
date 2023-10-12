import { createDateAtom } from "@/src/stores/create";
import { useAtom } from "jotai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./calendar.css";

const Calendar = () => {
  const [eventDate, setEventDate] = useAtom<Date>(createDateAtom);
  const disabledDays = { before: new Date() };
  return (
    <DayPicker
      mode="single"
      selected={eventDate}
      onSelect={setEventDate}
      disabled={disabledDays}
      className="absolute top-[4.5rem] left-0 z-10 bg-background p-3 rounded-md shadow-md"
    />
  );
};
export default Calendar;
