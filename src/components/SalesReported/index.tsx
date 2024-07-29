import { formatter } from "../../utils/utils";
import { StyledBackArrowText, StyledSalesReported } from "./styles";

interface ISalesReported {
  value: string;
  isSalesReported?: boolean;
}

const SalesReported = ({ value, isSalesReported = false }: ISalesReported) => {
  return (
    <StyledSalesReported>
      <StyledBackArrowText>{`Total reportado: `}</StyledBackArrowText>
      <StyledBackArrowText>
        {`${formatter.format(Number(value))} ${isSalesReported ? "ud." : "kg"}`}
      </StyledBackArrowText>
    </StyledSalesReported>
  );
};

export default SalesReported;
