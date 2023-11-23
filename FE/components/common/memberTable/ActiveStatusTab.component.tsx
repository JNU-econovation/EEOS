import CustomTabItem from "../CustomTabItem";

//FIXME: 로직 적용하기
const ActiveStatusTab = () => {
  return (
    <div className="flex gap-3">
      <CustomTabItem text="All" size="lg" color="gray" rounded />
      <CustomTabItem text="AM" size="lg" color="teal" rounded />
      <CustomTabItem text="RM" size="lg" color="gray" rounded />
      <CustomTabItem text="CM" size="lg" color="gray" rounded />
      <CustomTabItem text="OB" size="lg" color="gray" rounded />
    </div>
  );
};
export default ActiveStatusTab;
