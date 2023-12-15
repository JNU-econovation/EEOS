import TabItem, { tabColors, tabSizes } from "./TabItem";

interface Option<T> {
  type: T;
  text: string;
}

interface Props<T> {
  options: Option<T>[];
  selected: T;
  setSelected: (selected: T) => void;
  size: keyof typeof tabSizes;
  baseColor: keyof typeof tabColors;
  potionColor: keyof typeof tabColors;
}

const LineTab = <T,>({
  options,
  selected,
  setSelected,
  size,
  baseColor,
  potionColor,
}: Props<T>) => {
  const getColor = (option: Option<T>) => {
    return option.type === selected ? potionColor : baseColor;
  };

  const handleSelect = (type: T) => {
    setSelected(type);
  };

  return (
    <div className="flex gap-4">
      {options.map((option: Option<T>) => (
        <TabItem
          color={getColor(option)}
          size={size}
          rounded
          text={option.text}
          onClick={() => handleSelect(option.type)}
        />
      ))}
    </div>
  );
};
export default LineTab;
