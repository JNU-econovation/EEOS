import { useGetUserInputStatusQuery } from "@/hooks/query/useTeamBuildingQuery";
import InputStatusView from "./InputStatusView";
import SentenceField from "./SentenceField";

const UserInputModal = () => {
  const { data: userInfo, isLoading } = useGetUserInputStatusQuery();

  if (isLoading) return null;

  return (
    <>
      <InputStatusView {...userInfo} />
      <SentenceField inputStatus={userInfo.inputStatus} />
    </>
  );
};

export default UserInputModal;
