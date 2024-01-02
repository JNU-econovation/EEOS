"use client";

import Paginataion from "@/components/common/pagination/Pagination";
import Tab from "@/components/common/tabs/Tab";
import TextTab from "@/components/common/tabs/TextTab";
import ProgramList from "@/components/main/ProgramList";
import ProgramListSkeleton from "@/components/main/ProgramList.loader";
import PROGRAM from "@/constants/PROGRAM";
import {
  pageAtom,
  programCategoryAtom,
  programStatusAtom,
  totalPageAtom,
} from "@/storages/main.atom";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import { useAtom, useAtomValue } from "jotai";
import { Suspense } from "react";

const MainPage = () => {
  const [category, setCategory] = useAtom(programCategoryAtom);
  const [status, setStatus] = useAtom(programStatusAtom);
  const [page, setPage] = useAtom(pageAtom);
  const totalPage = useAtomValue(totalPageAtom);

  const handleSetCategory = (category: ProgramCategoryWithAll) => {
    setCategory(category);
  };

  const handleSetStatus = (status: ProgramStatus) => {
    setStatus(status);
  };

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  return (
    <div className="w-full space-y-8">
      <Tab<ProgramCategoryWithAll>
        options={PROGRAM.CATEGORY_TAB_WITH_ALL}
        selected={category}
        onItemClick={(v) => handleSetCategory(v)}
        size="lg"
        baseColor="white"
        pointColor="navy"
        align="line"
      />
      <TextTab<ProgramStatus>
        options={PROGRAM.STATUS_TAB}
        selected={status}
        onClick={(v) => handleSetStatus(v)}
      />
      <Suspense fallback={<ProgramListSkeleton />}>
        <ProgramList category={category} programStatus={status} page={page} />
      </Suspense>
      <Paginataion
        totalPage={totalPage}
        currentPage={page}
        onChange={(v) => handleSetPage(v)}
      />
    </div>
  );
};
export default MainPage;
