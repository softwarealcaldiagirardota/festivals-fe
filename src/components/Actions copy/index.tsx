import { formatter } from "../../utils/utils";
import Title from "../Title";
import { StyledActions, StyledBorder, StyledDate } from "./styles";

interface IActions extends React.HTMLAttributes<HTMLDivElement> {
  text: number;
  date: string;
}
const SalesDetail = ({ text, date, ...rest }: IActions) => {
  return (
    <StyledActions {...rest}>
      <StyledBorder />
      <Title text={formatter.format(text)} type="small" />
      <StyledDate>{date}</StyledDate>
    </StyledActions>
  );
};

export default SalesDetail;
