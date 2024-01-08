import MemberTableItemLoader from "./MemberTableItem.loader";

const MemberTableLoader = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <MemberTableItemLoader key={index} />
      ))}
    </>
  );
};
export default MemberTableLoader;
