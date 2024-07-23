import { StyledTitle } from "./styles";

interface ITitle {
  text: string;
  isSubtitle?: boolean;
}
const Title = ({ text, isSubtitle }: ITitle) => {
  return <StyledTitle isSubtitle={isSubtitle}>{text}</StyledTitle>;
};

export default Title;
