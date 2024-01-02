const LoadingSpinner = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-2 border-stroke-20 border-t-stroke-30"></div>
    </div>
  );
};
export default LoadingSpinner;
