import TeamBuildingDetail from "./TeamBuildingDetail";
import TeamBuildingHeader from "./TeamBuildingHeader";

const TeamBuildingInfo = () => {
  //TODO: teamBuildingId를 받아와서 해당 팀빌딩 정보를 가져오는 로직 필요

  const teamBuildingData: {
    title: string;
    accessRight: "edit" | "viewer";
    content: string;
  } = {
    title: "프로그램 제목",
    accessRight: "edit",
    content:
      "프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요프로그램 내용이 길어요",
  };

  return (
    <section className="space-y-8">
      <TeamBuildingHeader
        title={teamBuildingData.title}
        accessRight={teamBuildingData.accessRight}
      />
      <TeamBuildingDetail content={teamBuildingData.content} />
    </section>
  );
};

export default TeamBuildingInfo;
