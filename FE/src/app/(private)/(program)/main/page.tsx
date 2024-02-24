// TODO: 서버 컴포넌트로 변경하기
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/common/ErrorFallback";
import Tab from "@/components/common/tabs/Tab";
import TextTab from "@/components/common/tabs/TextTab";
import ProgramList from "@/components/main/ProgramList";
import ProgramListLoader from "@/components/main/ProgramList.loader";
import TeamBuildingDropup from "@/components/main/TeamBuildingDropup";
import MAIN from "@/constants/MAIN";
import PROGRAM from "@/constants/PROGRAM";
import { ProgramCategoryWithAll, ProgramStatus } from "@/types/program";

const MainPage = () => {
  const searchParams = useSearchParams();

  // TODO: Hook으로 변경하기
  const [queryValue, setQueryValue] = useState(MAIN.DEFAULT_QUERY);

  // TODO: useEffect를 Hook으로 변경하기
  useEffect(() => {
    setQueryValue({
      ...MAIN.DEFAULT_QUERY,
      category:
        (searchParams.get("category") as ProgramCategoryWithAll) ?? "all",
      status: (searchParams.get("status") as ProgramStatus) ?? "active",
      page: searchParams.get("page") ?? "1",
    });
  }, [searchParams]);

  useEffect(() => {
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
      page: "1",
    });
  };

  const handleSetStatus = (status: ProgramStatus) => {
    setQueryValue({
      ...queryValue,
      status,
      page: "1",
    });
  };

  const handleSetPage = (page: number) => {
    setQueryValue({
      ...queryValue,
      page: page.toString(),
    });
  };

  // TODO: 합성 컴포넌트!
  return (
    <div className="relative space-y-8">
      <Tab<ProgramCategoryWithAll>
        options={Object.values(PROGRAM.CATEGORY_TAB_WITH_ALL)}
        selected={queryValue.category}
        onItemClick={(v) => handleSetCategory(v)}
        size="lg"
        baseColor="white"
        pointColor="navy"
        align="line"
      />
      <TextTab<ProgramStatus>
        options={Object.values(PROGRAM.STATUS_TAB)}
        selected={queryValue.status}
        onClick={(v) => handleSetStatus(v)}
      />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<ProgramListLoader />}>
          <ProgramList
            category={queryValue.category}
            programStatus={queryValue.status}
            page={+queryValue.page}
            setPage={handleSetPage}
          />
        </Suspense>
      </ErrorBoundary>
      <TeamBuildingDropup />
    </div>
  );
};

export default MainPage;
