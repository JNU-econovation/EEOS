"use client";

import Paginataion from "@/components/common/pagination/Pagination";
import Tab from "@/components/common/tabs/Tab";
import TextTab from "@/components/common/tabs/TextTab";
import ProgramList from "@/components/main/ProgramList";
import MAIN from "@/constants/MAIN";
import PROGRAM from "@/constants/PROGRAM";
import { totalPageAtom } from "@/storages/main.atom";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";
import { useAtomValue } from "jotai";
import qs from "qs";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [finished, setFinished] = useState(false);
  const [queryValue, setQueryValue] = useState(MAIN.DEFAULT_QUERY);
  const totalPage = useAtomValue(totalPageAtom);

  useEffect(() => {
    setQueryValue({
      ...MAIN.DEFAULT_QUERY,
      ...qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      }),
    });
    setFinished(true);
  }, []);

  useEffect(() => {
    if (!finished) return;
    window.history.replaceState(
      {},
      "",
      `?category=${queryValue.category}&status=${queryValue.status}&page=${queryValue.page}`,
    );
  }, [queryValue]);

  const handleSetCategory = (category: ProgramCategoryWithAll) => {
    setQueryValue({
      ...queryValue,
      category,
      page: 1,
    });
  };

  const handleSetStatus = (status: ProgramStatus) => {
    setQueryValue({
      ...queryValue,
      status,
      page: 1,
    });
  };

  const handleSetPage = (page: number) => {
    setQueryValue({
      ...queryValue,
      page,
    });
  };

  return (
    <div className="w-full space-y-8">
      <Tab<ProgramCategoryWithAll>
        options={PROGRAM.CATEGORY_TAB_WITH_ALL}
        selected={queryValue.category}
        onItemClick={(v) => handleSetCategory(v)}
        size="lg"
        baseColor="white"
        pointColor="navy"
        align="line"
      />
      <TextTab<ProgramStatus>
        options={PROGRAM.STATUS_TAB}
        selected={queryValue.status}
        onClick={(v) => handleSetStatus(v)}
      />
      <ProgramList
        category={queryValue.category}
        programStatus={queryValue.status}
        page={queryValue.page}
      />
      <Paginataion
        totalPage={totalPage}
        currentPage={+queryValue.page}
        onChange={(v) => handleSetPage(v)}
      />
    </div>
  );
};
export default MainPage;
