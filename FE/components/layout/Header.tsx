import { PropsWithChildren } from "react";
import Button from "../common/Button";

export type headerLeft = "user" | "left";
export type headerRight = "btn" | "none";

interface HeaderProps {
  left: headerLeft;
  right: headerRight;
}

const Header = ({ left, right }: PropsWithChildren<HeaderProps>) => {
  return (
    <header className="flex justify-between items-center w-full h-[5rem] px-[7.5rem] py-2 rounded-b-md shadow-sm sticky top-0 bg-background">
      <div className="flex justify-center w-[10rem]">
        <img src={`/icons/${left}.svg`} alt="user icon" width="26px" />
      </div>
      <h1 className="font-extrabold text-2xl">EEOS</h1>
      <div className="w-[10rem]">
        {right === "btn" && (
          <Button
            type="primary"
            size="base"
            leftIcon={true}
            children="행사 추가"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
