import { palette } from "../../../../theme";
import {
  formatter,
  totalSales2023,
  totalSales2023Money,
} from "../../../../utils/utils";
import CircularProgressBar from "../circle";
import Title from "../title";
import { StyledCircle, StyledContainerTotalCards, StyledTexts } from "./styles";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface ITotalCards {
  type: "sales" | "money" | "survey" | "salesday";
  total: number;
  text: string;
  percentage: number;
  subtype?: string;
}

const TotalCards = ({
  type,
  total,
  text,
  percentage,
  subtype,
}: ITotalCards) => {
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
      {subtype !== "day" && (
        <StyledCircle>
          <CircularProgressBar percentage={percentage} />
        </StyledCircle>
      )}
    </StyledContainerTotalCards>
  );
};

export default TotalCards;
