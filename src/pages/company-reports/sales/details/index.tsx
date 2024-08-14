import { useEffect } from "react";
import { useHeader } from "../../../../context/header-context";
import { Container, StyledContainerSalesDetails } from "../styles";
import BackArrow from "../../../../components/BackArrow";

import SalesDetail from "../../../../components/Actions copy";
import { formatDateTime, messages, urlBase } from "../../../../utils/utils";
import SalesReported from "../../../../components/SalesReported";

const salesDetail = [
  {
    id: "1",
    value: 40,
    date: `${formatDateTime(new Date())}`,
  },
  {
    id: "2",
    value: 100,
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
const ReportsSalesDetails = () => {
  const { setTitle, isMobile, showSnackBar } = useHeader();

  const fetchSales = async (CompanyId: number) => {
    try {
      const response = await fetch(`${urlBase}/CompanySale/${CompanyId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("***data", data);
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    setTitle("Detalle de ventas");
    fetchSales(5);
  }, []);

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      {<SalesReported value="12" isSalesReported={true} />}
      <StyledContainerSalesDetails>
        {salesDetail.map((detail) => (
          <SalesDetail
            key={detail.id}
            text={detail.value}
            date={detail.date}
            isSales={true}
          />
        ))}
      </StyledContainerSalesDetails>
    </Container>
  );
};

export default ReportsSalesDetails;
