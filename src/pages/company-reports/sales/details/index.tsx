import { useEffect, useState } from "react";
import { useHeader } from "../../../../context/header-context";
import { Container, StyledContainerSalesDetails } from "../styles";
import BackArrow from "../../../../components/BackArrow";
import SalesDetail from "../../../../components/Actions copy";
import { formatDateTime, messages, urlBase } from "../../../../utils/utils";
import SalesReported from "../../../../components/SalesReported";
import { Participation } from "../../../../utils/type";

const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const userTimezoneDate = date.toLocaleString();
  return `${formatDateTime(new Date(userTimezoneDate?.split(".")[0]))}`;
};

function sumCant(array: Participation[]) {
  return array.reduce((total, item) => total + item.cant, 0);
}

const ReportsSalesDetails = () => {
  const { setTitle, isMobile, showSnackBar, companyData } = useHeader();
  const [detailsData, setDetailsData] = useState<Participation[]>([]);

  const fetchSales = async (CompanyId: number) => {
    try {
      const response = await fetch(`${urlBase}/CompanySale/${CompanyId}`, {
        headers: {
          "id-festival": "2",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data?.data && data?.state) setDetailsData(data?.data);
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    setTitle("Detalle de ventas");
    if (companyData?.id) fetchSales(companyData?.id);
  }, [companyData?.id]);

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      {
        <SalesReported
          value={sumCant(detailsData).toString()}
          isSalesReported={true}
        />
      }
      <StyledContainerSalesDetails>
        {detailsData.map((detail) => (
          <SalesDetail
            key={detail.id}
            text={detail.cant}
            date={convertDate(detail.createdAt)}
            isSales={true}
          />
        ))}
      </StyledContainerSalesDetails>
    </Container>
  );
};

export default ReportsSalesDetails;
