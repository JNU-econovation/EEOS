const AttendeeInfoLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="flex gap-3 border-b-2 py-4">
        <div className="h-8 w-28 rounded-full bg-slate-200"></div>
        <div className="h-8 w-8 rounded-full bg-slate-200"></div>
      </div>
      <div className="grid w-full auto-cols-auto justify-items-center gap-6 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-7 w-40 rounded-full bg-slate-200"></div>
        ))}
      </div>
    </div>
  );
};
export default AttendeeInfoLoader;
