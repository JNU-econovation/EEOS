"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Paginataion from "@/components/common/pagination/Pagination.component";
import Tabs from "@/components/common/Tabs.component";
import Title from "@/components/common/Title.component";
import ProgramList from "@/components/home/ProgramList";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { getProgramList } from "@/src/apis/program/program";
import {
  listSize,
  programStatusList,
  programStatusOption,
} from "@/src/constants/home";
import { programStatusKr } from "@/src/types/home/home";

const HomePage = () => {
  const [programStatus, setProgramStatus] =
    useState<programStatusKr>("진행 중");
  const [page, setPage] = useState<number>(1);

  const { data, isError, isLoading } = useQuery(
    ["programList", programStatus, page],
    () =>
      getProgramList(
        programStatusOption[programStatus].toLowerCase(),
        listSize,
        page,
      ),
  );

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error</div>;

  const { totalPage, programs } = data;

  return (
    <DefaultLayout>
      <Title className="w-full">행사 목록</Title>
      <Tabs<programStatusKr>
        options={programStatusList}
        selected={programStatus}
        setSelected={setProgramStatus}
      />
      <ProgramList programs={programs} />
      <Paginataion
        totalPage={totalPage}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </DefaultLayout>
  );
};

export default HomePage;
