import { useQueryClient } from "@tanstack/react-query";
import Tab from "../../tabs/Tab";
import ACTIVE_STATUS from "@/constants/ACTIVE_STATUS";
import API from "@/constants/API";
import MESSAGE from "@/constants/MESSAGE";
import { usePutMyActiveStatus } from "@/hooks/query/useUserQuery";
import { ActiveStatus } from "@/types/member";

const ActiveStatusTab = ({ activeStatus }) => {
  const queryClient = useQueryClient();
  const { mutate: changeActiveStatus } = usePutMyActiveStatus();

  const handleChangeActiveStatus = (activeStatus: ActiveStatus) => {
    if (confirm(MESSAGE.CONFIRM.EDIT)) {
      changeActiveStatus(activeStatus);
      queryClient.invalidateQueries([API.USER.ACTIVE_STATUS]);
    }
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
