interface TabsProps<T> {
  options: readonly T[];
  selected: T;
  setSelected: React.Dispatch<React.SetStateAction<T>>;
}

const Tabs = <T extends string>({
  options,
  selected,
  setSelected,
}: TabsProps<T>) => {
  return (
    <div className="flex justify-start gap-4 w-full px-2 py-4 border-b-2 border-stroke-base mb-6">
      {options.map((option) =>
        option === selected ? (
          <span className="font-bold text-xl">{option}</span>
        ) : (
          <span
            className="font-normal text-lg text-gray-600"
            onClick={() => setSelected(option)}
          >
            {option}
          </span>
        )
      )}
    </div>
  );
};

export default Tabs;
