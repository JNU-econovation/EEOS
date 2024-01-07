import SlackLoginButton from "./LoginButton";

const SlackLoginSection = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="font-light">에코노베이션 슬랙으로 로그인</p>
      <SlackLoginButton />
    </div>
  );
};

export default SlackLoginSection;
