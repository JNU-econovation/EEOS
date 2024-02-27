import { PropsWithChildren } from "react";
import AuthValidate from "@/components/common/validate/Auth";

const PrivateLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <AuthValidate />
      {children}
    </>
  );
};
export default PrivateLayout;
