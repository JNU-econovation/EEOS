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
    <div className="mb-6 flex w-full justify-start gap-4 border-b-2 border-stroke-base px-2 py-4">
      {options.map((option) =>
        option === selected ? (
          <span className="text-xl font-bold">{option}</span>
        ) : (
          <span
            className="text-lg font-normal text-gray-600"
            onClick={() => setSelected(option)}
          >
            {option}
          </span>
        ),
      )}
    </div>
  );
};

export default Tabs;
