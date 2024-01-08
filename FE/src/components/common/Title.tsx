import classNames from "classnames";

interface TitleProps {
  text: string;
  textColor?: string;
}

const titleColors = {
  black: "text-black",
  white: "text-background",
  error: "text-error",
};

const Title = ({ text, textColor = "black" }: TitleProps) => {
  const titleStyle = classNames("text-3xl font-bold", titleColors[textColor]);
  return <h1 className={titleStyle}>{text}</h1>;
};
export default Title;
