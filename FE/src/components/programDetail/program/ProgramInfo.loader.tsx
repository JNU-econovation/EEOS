import ProgramDetailSkeleton from "./ProgramDetail.skeleton";
import ProgramHeaderSkeleton from "./ProgramHeader.skeleton";

const ProgramInfoLoader = () => {
  return (
    <div className="space-y-8">
      <ProgramHeaderSkeleton />
      <ProgramDetailSkeleton />
    </div>
  );
};
export default ProgramInfoLoader;
