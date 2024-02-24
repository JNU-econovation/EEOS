import InputStatusView from "./InputStatusView";
import SentenceField from "./SentenceField";
import { useGetUserInputStatusQuery } from "@/hooks/query/useTeamBuildingQuery";

const UserInputModal = () => {
  const { data: userInfo, isLoading } = useGetUserInputStatusQuery();

  if (isLoading) return null;

  return (
    <>
      <InputStatusView {...userInfo} />
      <SentenceField
        inputStatus={userInfo.inputStatus}
        initContent={userInfo.content}
      />
    </>
  );
};

export default UserInputModal;
