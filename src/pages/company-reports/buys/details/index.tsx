import { useEffect } from "react";
import { useHeader } from "../../../../context/header-context";
import { Container, StyledContainerSalesDetails } from "../styles";
import BackArrow from "../../../../components/BackArrow";
import SalesDetail from "../../../../components/Actions copy";
import { formatDateTime } from "../../../../utils/utils";

const salesDetail = [
  {
    id: "1",
    value: 40,
    date: `${formatDateTime(new Date())}`,
  },
  {
    id: "2",
    value: 40,
    date: `${formatDateTime(new Date())}`,
  },
  {
    id: "3",
    value: 1500,
    date: `${formatDateTime(new Date())}`,
  },
  {
    id: "4",
    value: 4000,
    date: `${formatDateTime(new Date())}`,
  },
];
const ReportsBuysDetails = () => {
  const { setTitle, isMobile } = useHeader();

  useEffect(() => {
    setTitle("Detalle de compras");
  }, []);

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      <StyledContainerSalesDetails>
        {salesDetail.map((detail) => (
          <SalesDetail
            key={detail.id}
            text={detail.value} 
            date={detail.date}
          />
        ))}
      </StyledContainerSalesDetails>
    </Container>
  );
};

export default ReportsBuysDetails;
