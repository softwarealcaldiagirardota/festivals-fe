import { formatter, KG, UNIDADES } from "../../utils/utils";
import { StyledBackArrowText, StyledSalesReported } from "./styles";

interface ISalesReported {
  value: string;
  isSalesReported?: boolean;
}

// ... resto del código

const SalesReported = ({ value, isSalesReported = false }: ISalesReported) => {
  return (
    <StyledSalesReported>
      <StyledBackArrowText>Total reportado: </StyledBackArrowText>
      <StyledBackArrowText>
        {`${formatter.format(Number(value))} ${isSalesReported ? UNIDADES : KG}`}
      </StyledBackArrowText>
    </StyledSalesReported>
  );
};


export default SalesReported;
