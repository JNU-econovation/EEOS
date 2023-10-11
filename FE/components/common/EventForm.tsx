"use client";

import { useState } from "react";
import Input from "./Input";
import Calender from "react-calendar";
import "@/components/create/calendar.css";
import moment from "moment";
import { convertDate } from "@/src/utils/date";
import { useOutsideClick } from "@/src/hooks/useOutsideRef";
import Textarea from "./Textarea";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [eventDate, setEventDate] = useState<Value>(new Date());
  const [openCalender, setOpenCalender] = useState<boolean>(false);
  const calenderRef = useOutsideClick(() => setOpenCalender(false));

  return (
    <form className="flex flex-col gap-4 w-full max-w-[50rem] mt-8">
      <Input
        id="event-title"
        label="행사 이름"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="행사 이름 입력"
      />
      {eventDate instanceof Date && (
        <div
          onClick={() => !openCalender && setOpenCalender(true)}
          className="relative"
          ref={calenderRef}
        >
          <Input
            id="event-date"
            label="행사 일정"
            value={convertDate(eventDate.getTime().toString(), "short")}
            onChange={() => {}}
            placeholder="XXXX-XX-XX"
          />
          {openCalender && (
            <Calender
              value={eventDate}
              onChange={setEventDate}
              formatDay={(locale, date) => moment(date).format("DD")}
              minDate={new Date()}
              maxDetail="month"
              minDetail="year"
              className={"absolute top-[4.5rem] left-0 z-10"}
            />
          )}
        </div>
      )}

      <Textarea
        id="event-title"
        label="행사 내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="행사 내용 입력"
      />
    </form>
  );
};

export default EventForm;
