import ProgramListItemSkeleton from "./ProgramListItem.skeleton";

const ProgramListLoader = () => {
  return (
    <div className="animate-pulse space-y-5">
      <ProgramListItemSkeleton />
      <ProgramListItemSkeleton />
      <ProgramListItemSkeleton />
      <ProgramListItemSkeleton />
      <ProgramListItemSkeleton />
      <ProgramListItemSkeleton />
    </div>
  );
};

export default ProgramListLoader;
