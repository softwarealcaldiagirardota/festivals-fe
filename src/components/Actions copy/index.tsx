import { formatter, KG, UNIDADES } from "../../utils/utils";
import Title from "../Title";
import { StyledActions, StyledBorder, StyledDate } from "./styles";
import DeleteIcon from "@mui/icons-material/Delete";
interface IActions extends React.HTMLAttributes<HTMLDivElement> {
  text: number;
  isSales?: boolean;
  date: string;
  onClick?: (() => void) | undefined;
}
const SalesDetail = ({ text, date, isSales, onClick, ...rest }: IActions) => {
  return (
    <StyledActions {...rest}>
      <StyledBorder />
      <Title
        text={`${formatter.format(text)}${isSales ? UNIDADES : KG}`}
        type="small"
      />
      <StyledDate>{date}</StyledDate>
      <div>
        <DeleteIcon onClick={onClick} />
      </div>
    </StyledActions>
  );
};

export default SalesDetail;
