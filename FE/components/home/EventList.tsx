import { summaryEvent } from "@/src/apis/event/type";
import EventListItem from "./EventListItem";

interface EventListProps {
  events: summaryEvent[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {events.map((event) => (
        <EventListItem eventData={event} />
      ))}
    </div>
  );
};

export default EventList;
