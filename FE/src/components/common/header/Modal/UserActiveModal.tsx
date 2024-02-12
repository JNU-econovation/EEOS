import Button from "../../Button";
import UserActiveModalSkeleton from "./UserActiveModal.loader";
import { useLogoutMutation } from "@/hooks/query/useAuthQuery";
import { useRouter } from "next/navigation";
import ROUTES from "@/constants/ROUTES";
import { Suspense } from "react";
import UserInfoSection from "./UserInfoSection";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../ErrorFallback";

const LOGOUT = "로그아웃";

const UserActiveModal = () => {
  const router = useRouter();
  const { mutate: logout } = useLogoutMutation();

  const handleLogout = () => {
    logout();
    router.push(ROUTES.LOGIN);
  };

  return (
    <section className="absolute -left-44 top-10 flex w-80 min-w-fit flex-col items-center gap-6 rounded-2xl bg-background px-12 py-6 drop-shadow-lg sm:-left-32">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<UserActiveModalSkeleton />}>
          <UserInfoSection />
        </Suspense>
      </ErrorBoundary>
      <Button
        color="white"
        size="lg"
        className="w-full font-semibold transition-colors duration-200 hover:bg-paragraph hover:text-background"
        onClick={handleLogout}
      >
        {LOGOUT}
      </Button>
    </section>
  );
};
export default UserActiveModal;
