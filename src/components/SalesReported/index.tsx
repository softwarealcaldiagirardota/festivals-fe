import { formatter, KG, UNIDADES } from "../../utils/utils";
import {
  StyledBackArrowText,
  StyledSalesReported,
  StyledSalesReportedSubtitle,
} from "./styles";

interface ISalesReported {
  value: string;
  isSalesReported?: boolean;
  isTitle?: boolean;
}

const SalesReported = ({
  value,
  isSalesReported = false,
  isTitle,
}: ISalesReported) => {
  if (isTitle)
    return (
      <StyledSalesReportedSubtitle>
        <div>Total del día:</div>
        <div>{`${formatter.format(Number(value))} ${
          isSalesReported ? UNIDADES : KG
        }`}</div>
      </StyledSalesReportedSubtitle>
    );

  return (
    <StyledSalesReported>
      <StyledBackArrowText>Total reportado: </StyledBackArrowText>
      <StyledBackArrowText>
        {`${formatter.format(Number(value))} ${
          isSalesReported ? UNIDADES : KG
        }`}
      </StyledBackArrowText>
    </StyledSalesReported>
  );
};

export default SalesReported;
