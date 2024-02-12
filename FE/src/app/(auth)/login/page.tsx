import LoginLeftSection from "@/components/login/LeftSection";
import LoginRightSection from "@/components/login/RightSection";

const LoginPage = () => {
  return (
    <div className="grid h-[80vh] sm:h-[44rem] sm:grid-cols-[25rem_1fr] sm:shadow-lg">
      <LoginLeftSection />
      <LoginRightSection />
    </div>
  );
};
export default LoginPage;
