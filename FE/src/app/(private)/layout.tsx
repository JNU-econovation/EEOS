import Validate from "@/components/common/Validate";
import { PropsWithChildren } from "react";

const PrivateLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Validate />
      {children}
    </>
  );
};
export default PrivateLayout;
