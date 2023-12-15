import classNames from "classnames";
import TabItem, { tabColors, tabSizes } from "./TabItem";

// TODO: Option 타입 밖으로 빼기
interface Option<T> {
  type: T;
  text: string;
}

const tabAlign = {
  line: "flex gap-4",
  square: "grid grid-cols-2 gap-4",
};

export interface TabProps<T> {
  options: Option<T>[];
  selected: T;
  setSelected: (selected: T) => void;
  size: keyof typeof tabSizes;
  baseColor: keyof typeof tabColors;
  potionColor: keyof typeof tabColors;
  align: keyof typeof tabAlign;
}

const Tab = <T,>({
  options,
  selected,
  setSelected,
  size,
  baseColor,
  potionColor,
  align,
}: TabProps<T>) => {
  const tabStyle = classNames(tabAlign[align]);
  const getColor = (option: Option<T>) => {
    return option.type === selected ? potionColor : baseColor;
  };

  const handleSelect = (type: T) => {
    setSelected(type);
  };

  return (
    <div className={tabStyle}>
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
export default Tab;
