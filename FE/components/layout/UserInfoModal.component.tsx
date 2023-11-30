import { useState } from "react";
import ActiveStatusTab from "./ActiveStatusTab.component";
import ACTIVE_STATUS from "@/src/constants/ACTIVE_STATUS";

const UserInfoModal = () => {
  // TODO: 서버에서 사용자 정보 받아오기
  const userName = "25기 강바다";
  const [activeStatus, setActiveStatus] = useState("am");
  const options = ACTIVE_STATUS.CATEGORY.filter(
    (option) => option.type !== "all",
  );

  // TODO: 하드코딩 수정
  return (
    <div className="absolute -left-32 top-10 flex flex-col items-center gap-6 rounded-2xl bg-background px-12 py-6 drop-shadow-lg">
      <p className="text-lg font-bold">{userName}</p>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm">{ACTIVE_STATUS.LABEL}</p>
        <ActiveStatusTab
          selected={activeStatus}
          options={options}
          onSelect={(v) => setActiveStatus(v)}
        />
      </div>
      <button
        type="button"
        className="w-full rounded-md bg-background py-2 text-sm font-medium text-paragraph transition-colors duration-300 hover:bg-paragraph hover:text-background"
      >
        로그아웃
      </button>
    </div>
  );
};
export default UserInfoModal;
