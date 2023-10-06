import { summaryEvent } from "@/src/apis/event";
import { convertDate } from "@/src/utils/date";

const EventListItem = ({ id, name, timestamp, eventStatus }: summaryEvent) => {
  return (
    <a
      href={`/detail/${id}`}
      className="flex justify-between items-center w-full rounded-lg px-8 py-6 bg-gray-light hover:bg-secondary transition-all"
    >
      <span className="font-bold text-lg">{name}</span>
      <span className="font-normal text-base">{convertDate(timestamp)}</span>
    </a>
  );
};

export default EventListItem;
