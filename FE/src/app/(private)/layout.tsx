import AuthValidate from "@/components/common/validate/Auth";
import { PropsWithChildren } from "react";

const PrivateLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <AuthValidate />
      {children}
    </>
  );
};
export default PrivateLayout;
