import { summaryEvent } from "@/src/apis/event/type";
import { convertDate } from "@/src/utils/date";
import Link from "next/link";

interface EventListItemProps {
  eventData: summaryEvent;
}

const EventListItem = ({ eventData }: EventListItemProps) => {
  const { id, title, programDate } = eventData;

  return (
    <Link
      href={`/detail/${id}`}
      className="flex justify-between items-center w-full rounded-lg px-8 py-6 bg-gray-light hover:bg-secondary transition-all"
      key={id}
    >
      <span className="font-bold text-lg">{title}</span>
      <span className="font-normal text-base">{convertDate(programDate)}</span>
    </Link>
  );
};

export default EventListItem;
