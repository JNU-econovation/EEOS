import { useGetMyActiveStatus } from "@/hooks/query/useUserQuery";
import Button from "../../Button";
import UserActiveModalSkeleton from "./UserActiveModal.loader";
import ActiveStatusTab from "./ActiveStatusTab";
import { useLogoutMutation } from "@/hooks/query/useAuthQuery";
import { useRouter } from "next/navigation";
import ROUTES from "@/constants/ROUTES";

const MESSAGE = "본인의 회원 상태를 선택해주세요.";
const LOGOUT = "로그아웃";

const UserActiveModal = () => {
  const router = useRouter();
  const { data: myActiveData, isLoading, isError } = useGetMyActiveStatus();
  const { name, activeStatus } = myActiveData;
  const { mutate: logout } = useLogoutMutation();

  if (isLoading) return <UserActiveModalSkeleton />;
  if (isError) return <div>에러 발생</div>;

  const handleLogout = () => {
    logout();
    router.push(ROUTES.LOGIN);
  };

  return (
    <section className="absolute -left-32 top-10 flex w-80 flex-col items-center gap-6 rounded-2xl bg-background px-12 py-6 drop-shadow-lg">
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">{MESSAGE}</p>
      <ActiveStatusTab activeStatus={activeStatus} />
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
