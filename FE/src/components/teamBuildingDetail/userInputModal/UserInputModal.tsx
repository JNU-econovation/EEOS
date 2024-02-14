import InputStatusView from "./InputStatusView";
import SentenceField from "./SentenceField";

const UserInputModal = () => {
  // TODO: useQuery로 수정
  const userInfo: {
    name: string;
    inputStatus: "incomplete" | "complete";
  } = {
    name: "25기 강바다",
    inputStatus: "incomplete",
  };
  return (
    <>
      <InputStatusView {...userInfo} />
      <SentenceField inputStatus={userInfo.inputStatus} />
    </>
  );
};

export default UserInputModal;
