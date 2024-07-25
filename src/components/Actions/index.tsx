import { palette } from "../../theme";
import Title from "../Title";
import { StyledActions, StyledBorder, StyledLogo } from "./styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface IActions extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  text: string;
}
const Actions = ({ logo, text, ...rest }: IActions) => {
  return (
    <StyledActions {...rest}>
      <StyledBorder />
      <Title text={text} type="small" />
      <StyledLogo src={logo} alt="Logo" />
      <ChevronRightIcon
        sx={{
          fontSize: "2rem",
          color: palette.primary.title,
        }}
      />
    </StyledActions>
  );
};

export default Actions;
