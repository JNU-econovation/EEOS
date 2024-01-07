import AuthValidate from "@/components/common/AuthValidate";
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
