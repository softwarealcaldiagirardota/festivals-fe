import { StyledTitle } from "./styles";

type Types = "big" | "small" | "medium";
interface ITitle {
  text: string;
  type?: Types;
}

const getSize = (type: Types) => {
  switch (type) {
    case "big":
      return "34px";
    case "small":
      return "22px";
    case "medium":
      return "30px";
    default:
      return "34px";
  }
};
const Title = ({ text, type = "big" }: ITitle) => {
  return <StyledTitle size={getSize(type)}>{text}</StyledTitle>;
};

export default Title;
