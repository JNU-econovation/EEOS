const LoadingSpinner = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="inline-block h-11 w-11 animate-spin rounded-full border-2 border-stroke-light border-t-stroke-base"></div>
    </div>
  );
};
export default LoadingSpinner;
