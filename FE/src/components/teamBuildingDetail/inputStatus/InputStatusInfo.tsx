import InputStatusHeader from "./InputStatusHeader";
import MemberList from "@/components/common/MemberList";
import { InputStatus } from "@/types/teamBuilding";

interface InputStatusInfoProps {
  status: InputStatus;
}

const InputStatusInfo = ({ status }: InputStatusInfoProps) => {
  // TODO: 입력 상태에 따른 멤버 리스트를 가져오는 로직이 필요함
  const members = Array(14)
    .fill(null)
    .map((_, index) => ({
      memberId: index + 1,
      name: `25기 홍길동`,
    }));

  return (
    <div>
      <InputStatusHeader status={status} members={members} />
      <MemberList members={members} />
    </div>
  );
};
export default InputStatusInfo;
