import LoadingSpinner from "../LoadingSpinner";

const UserInfoModalSkeleton = () => {
  return (
    <section className="absolute -left-32 top-10 flex h-80 w-80 flex-col items-center gap-6 rounded-2xl bg-background px-12 py-6 drop-shadow-lg">
      <LoadingSpinner />
    </section>
  );
};

export default UserInfoModalSkeleton;
