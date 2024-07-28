import { formatter } from "../../utils/utils";
import { StyledBackArrowText, StyledSalesReported } from "./styles";

interface ISalesReported {
  value: string;
}
const SalesReported = ({ value }: ISalesReported) => {
  return (
    <StyledSalesReported>
      <StyledBackArrowText>{`Total reportado: `}</StyledBackArrowText>
      <StyledBackArrowText>{` ${formatter.format(
        Number(value)
      )}`}</StyledBackArrowText>
    </StyledSalesReported>
  );
};

export default SalesReported;
