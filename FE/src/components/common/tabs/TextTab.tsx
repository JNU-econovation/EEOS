import { TabOption } from "@/types/tab";

interface TextTabProps<T> {
  options: TabOption<T>[];
  selected: string;
  onClick: (selected: T) => void;
}

const TextTab = <T,>({ options, selected, onClick }: TextTabProps<T>) => {
  return (
    <div className="flex w-full gap-4 border-b-2 border-stroke-30 px-2 py-4">
      {options.map((option) =>
        option.type === selected ? (
          <button key={option.text} className="text-xl font-bold" type="button">
            {option.text}
          </button>
        ) : (
          <button
            key={option.text}
            className="text-lg font-normal text-gray-600"
            onClick={() => onClick(option.type)}
            type="button"
          >
            {option.text}
          </button>
        ),
      )}
    </div>
  );
};

export default TextTab;
