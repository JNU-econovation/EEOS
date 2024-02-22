import classNames from "classnames";

interface TitleProps {
  text: string;
  textColor?: keyof typeof titleColors;
}

const titleColors = {
  black: "text-black",
  white: "text-background",
  error: "text-error",
  gray: "text-gray-30",
};

const Title = ({ text, textColor = "black" }: TitleProps) => {
  const titleStyle = classNames(
    "text-2xl font-bold sm:text-3xl",
    titleColors[textColor],
  );
  return <h1 className={titleStyle}>{text}</h1>;
};
export default Title;
