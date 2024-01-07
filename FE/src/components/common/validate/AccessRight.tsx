"use client";

import ALERT from "@/constants/ALERT";
import ROUTES from "@/constants/ROUTES";
import { useGetProgramAccessRight } from "@/hooks/query/useProgramQuery";
import { useRouter } from "next/navigation";

const AccessRightValidate = ({ programId }) => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetProgramAccessRight(programId);

  if (isLoading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }

  if (data.accessRight !== "edit") {
    alert(ALERT.EDIT_DISABLED.NO_RIGHT);
    router.push(ROUTES.MAIN);
  }

  return <></>;
};
export default AccessRightValidate;
