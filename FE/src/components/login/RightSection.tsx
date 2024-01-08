import Title from "../common/Title";
import SlackLoginSection from "./slack/LoginSection";

const LoginRightSection = () => {
  return (
    <div
      id="right"
      className="flex flex-col items-center justify-center gap-24"
    >
      <Title text={"로그인"} />
      <SlackLoginSection />
    </div>
  );
};
export default LoginRightSection;
