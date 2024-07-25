import { StyledTitle, StyledTitleMenu } from "./styles";

type Types = "big" | "small" | "medium" | "xs";
interface ITitle {
  text: string;
  type?: Types;
  isMenu?: boolean;
  color?: "white" | "default";
}

const getSize = (type: Types) => {
  switch (type) {
    case "big":
      return "34px";
    case "small":
      return "22px";
    case "xs":
      return "18px";
    case "medium":
      return "30px";
    default:
      return "34px";
  }
};
const Title = ({ text, type = "big", isMenu, color }: ITitle) => {
  if (isMenu) {
    return <StyledTitleMenu>{text}</StyledTitleMenu>;
  }
  return (
    <StyledTitle color={color} size={getSize(type)}>
      {text}
    </StyledTitle>
  );
};

export default Title;
