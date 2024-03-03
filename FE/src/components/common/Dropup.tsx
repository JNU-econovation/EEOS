import { PropsWithChildren, useState } from "react";
import useOutsideRef from "@/hooks/useOutsideRef";

interface DropupItem {
  text: string;
  onClick: () => void;
}

interface DropupProps extends PropsWithChildren<{}> {
  title: string;
  items: DropupItem[];
}

interface DropupItemProps extends DropupItem {}

const Dropup = ({ children, title, items }: DropupProps) => {
  const [isDropupOpen, setIsDropupOpen] = useState(false);
  const dropupRef = useOutsideRef(() => setIsDropupOpen(false));

  const handleDropup = () => {
    setIsDropupOpen(true);
  };

  return (
    <div
      className="fixed bottom-[8%] right-[10%] flex gap-2 rounded-3xl bg-primary px-5 py-3 shadow"
      onClick={handleDropup}
      ref={dropupRef}
    >
      {children}
      <span className="text-lg font-semibold text-stroke-30">{title}</span>
      {isDropupOpen && <DropupItemContainer items={items} />}
    </div>
  );
};

const DropupItemContainer = ({ items }: { items: DropupItem[] }) => {
  return (
    <div className="absolute bottom-14 left-0 z-10 w-full overflow-hidden">
      <div className="animate-dropup space-y-1 rounded-lg bg-gray-10 p-1">
        {items.map((item) => (
          <DropupItem {...item} />
        ))}
      </div>
    </div>
  );
};

const DropupItem = ({ text, onClick }: DropupItemProps) => {
  return (
    <div
      onClick={onClick}
      className=" cursor-pointer rounded-lg bg-background p-4 text-center font-semibold shadow-sm  transition-colors duration-200 hover:bg-warning-10"
    >
      {text}
    </div>
  );
};

export default Dropup;
