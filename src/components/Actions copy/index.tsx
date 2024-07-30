import { formatter, KG, UNIDADES } from "../../utils/utils";
import Title from "../Title";
import { StyledActions, StyledBorder, StyledDate } from "./styles";

interface IActions extends React.HTMLAttributes<HTMLDivElement> {
  text: number;
  isSales?: boolean;
  date: string;
}
const SalesDetail = ({ text, date, isSales, ...rest }: IActions) => {
  return (
    <StyledActions {...rest}>
      <StyledBorder />
      <Title text={`${formatter.format(text)}${isSales ? UNIDADES : KG}`}type="small" />
      <StyledDate>{date}</StyledDate>
    </StyledActions>
  );
};

export default SalesDetail;
