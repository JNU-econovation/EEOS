import LoginLeftSection from "@/components/login/LeftSection";
import LoginRightSection from "@/components/login/RightSection";

const LoginPage = () => {
  return (
    <div className="grid h-[38rem] grid-cols-[25rem_45rem] shadow-lg">
      <LoginLeftSection />
      <LoginRightSection />
    </div>
  );
};
export default LoginPage;
