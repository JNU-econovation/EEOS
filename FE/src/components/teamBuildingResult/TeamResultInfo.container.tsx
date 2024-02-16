import TeamResultInfo from "./TeamResultInfo";

const TeamResultInfoContainer = () => {
  const teamResult = Array(5).fill(
    Array(5).fill({
      name: "25기 강바다",
    }),
  );

  return (
    <div className="flex h-full w-full flex-col gap-16 overflow-y-scroll scrollbar-hide">
      {teamResult.map((members, index) => (
        <TeamResultInfo key={index} index={index} members={members} />
      ))}
    </div>
  );
};

export default TeamResultInfoContainer;
