const TeamResultInfoHeader = ({ index }: { index: number }) => {
  return (
    <div className="w-full border-b-2 border-stroke-20 py-4">
      <span className="text-2xl font-semibold">Team {index + 1}</span>
    </div>
  );
};
export default TeamResultInfoHeader;
