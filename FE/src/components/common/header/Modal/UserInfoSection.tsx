import { useGetMyActiveStatus } from "@/hooks/query/useUserQuery";
import ActiveStatusTab from "./ActiveStatusTab";

const MESSAGE = "본인의 회원 상태를 선택해주세요.";

const UserInfoSection = () => {
  const { data: myActiveData } = useGetMyActiveStatus();
  const { name, activeStatus } = myActiveData;

  return (
    <>
      <p className="text-lg font-bold">{name}</p>
      <p className="text-sm">{MESSAGE}</p>
      <ActiveStatusTab activeStatus={activeStatus} />
    </>
  );
};
export default UserInfoSection;
