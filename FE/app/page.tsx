"use client";

import Title from "@/components/common/Title";
import EventList from "@/components/home/EventList";
import { useQuery } from "@tanstack/react-query";
import { getEventList } from "@/src/apis/event/event";
import { useState } from "react";
import Tabs from "@/components/common/Tabs";
import {
  eventStatusList,
  eventStatusOption,
  listSize,
} from "@/src/constants/home";
import Paginataion from "@/components/common/pagination/Pagination";
import { eventStatusKr } from "@/src/types/home/home";
import DefaultLayout from "@/components/layout/DefaultLayout";

export default function Home() {
  const [eventStatus, setEventStatus] = useState<eventStatusKr>("진행 중");
  const [page, setPage] = useState<number>(1);

  const { data, isError, isLoading } = useQuery(
    ["eventList", eventStatus, page],
    () =>
      getEventList(eventStatusOption[eventStatus].toLowerCase(), listSize, page)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const { totalPage, events } = data;

  return (
    <DefaultLayout>
      <Title>행사 목록</Title>
      <Tabs<eventStatusKr>
        options={eventStatusList}
        selected={eventStatus}
        setSelected={setEventStatus}
      />
      <EventList events={events} />
      <Paginataion
        totalPage={totalPage}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </DefaultLayout>
  );
}
