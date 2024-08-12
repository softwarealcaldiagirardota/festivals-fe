import { palette } from "../../../../theme";
import { formatter } from "../../../../utils/utils";
import CircularProgressBar from "../circle";
import Title from "../title";
import { StyledCircle, StyledContainerTotalCards, StyledTexts } from "./styles";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const totalSales2023 = 42949;
const totalSales2023Money = 515388000;
interface ITotalCards {
  type: "sales" | "money" | "survey";
  total: number;
  text: string;
  percentage: number;
}

const TotalCards = ({ type, total, text, percentage }: ITotalCards) => {
  const isMajorSales =
    type === "sales"
      ? total >= totalSales2023
      : type === "money"
      ? total >= totalSales2023Money
      : false;
  return (
    <StyledContainerTotalCards>
      {/* <VisibilityOutlinedIcon
        sx={{
          position: "absolute",
          fontSize: "1.2rem",
          color: palette.primary.grey,
          top: "10px",
          right: "10px",
          cursor: "pointer",
          fontWeight: "",
        }}
      /> */}
      <StyledTexts>
        <Title text={text} />
        <Title
          text={` ${type === "money" ? "$" : ""}${formatter.format(total)}`}
          isNumber={true}
        />
        {isMajorSales ? (
          <TrendingUpIcon
            sx={{
              fontSize: "2rem",
              color: palette.primary.main,
            }}
          />
        ) : (
          <TrendingDownIcon
            sx={{
              fontSize: "2rem",
              color: palette.primary.statusLabel,
            }}
          />
        )}
      </StyledTexts>
      <StyledCircle>
        <CircularProgressBar percentage={percentage} />
      </StyledCircle>
    </StyledContainerTotalCards>
  );
};

export default TotalCards;
