import { ActiveStatus } from "@/types/member";
import Tab from "../../tabs/Tab";
import { usePutMyActiveStatus } from "@/hooks/query/useUserQuery";
import { useQueryClient } from "@tanstack/react-query";
import API from "@/constants/API";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";

const ActiveStatusTab = ({ activeStatus }) => {
  const queryClient = useQueryClient();
  const { mutate: changeActiveStatus } = usePutMyActiveStatus();

  const handleChangeActiveStatus = (activeStatus: ActiveStatus) => {
    changeActiveStatus(activeStatus);
    queryClient.invalidateQueries([API.USER.ACTIVE_STATUS]);
  };

  return (
    <Tab<ActiveStatus>
      selected={activeStatus}
      onItemClick={(activeStatus) => handleChangeActiveStatus(activeStatus)}
      options={Object.values(ACTIVE_STATUS.TAB)}
      size="lg"
      baseColor="gray"
      pointColor="teal"
      align="square"
    />
  );
};

export default ActiveStatusTab;
