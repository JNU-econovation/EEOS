"use client";

import { summaryEvent } from "@/src/apis/event";
import EventListItem from "./EventListItem";

interface EventListProps {
  events: summaryEvent[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="flex flex-col gap-5 w-full">
      {events.map((event) => (
        <EventListItem
          id={event.id}
          eventStatus={event.eventStatus}
          name={event.name}
          timestamp={event.timestamp}
        />
      ))}
    </div>
  );
};

export default EventList;
