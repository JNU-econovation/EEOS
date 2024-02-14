"use client";

import Title from "@/components/common/Title";

interface TeamBuildingHeaderProps {
  title: string;
  accessRight: "edit" | "viewer";
}

const TeamBuildingHeader = ({
  title,
  accessRight,
}: TeamBuildingHeaderProps) => {
  const handleCompleteButtonClick = () => {
    confirm("팀빌딩을 완료하시겠습니까?");
  };

  return (
    <section className="flex justify-between border-b-2 py-4">
      <Title text={title} />
      <div className="flex gap-6">
        <ProgressDisplay />
        {accessRight === "edit" && (
          <button
            className="text-lg font-bold text-gray-30 transition-colors duration-300 hover:text-stroke-30"
            onClick={handleCompleteButtonClick}
          >
            완료하기
          </button>
        )}
      </div>
    </section>
  );
};

const ProgressDisplay = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-action-20 opacity-40"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-action-20"></span>
      </span>
      <p className="text-lg font-bold text-action-20">진행중</p>
    </div>
  );
};

export default TeamBuildingHeader;
