const ProgramDetailSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 [&>*]:h-5">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="w-full rounded-lg bg-slate-200"></div>
      ))}
    </div>
  );
};
export default ProgramDetailSkeleton;
