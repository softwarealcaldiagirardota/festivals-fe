import { useEffect, useState } from "react";
import { useHeader } from "../../../../context/header-context";
import { Container, StyledContainerSalesDetails } from "../styles";
import BackArrow from "../../../../components/BackArrow";
import SalesDetail from "../../../../components/Actions copy";
import {
  formatDateTime,
  messages,
  orderArrayDesc,
  sumCant,
  sumCantDay,
  urlBase,
} from "../../../../utils/utils";
import SalesReported from "../../../../components/SalesReported";
import { Participation } from "../../../../utils/type";

const ReportsSalesDetails = () => {
  const { setTitle, isMobile, showSnackBar, companyData, online } = useHeader();
  const [detailsData, setDetailsData] = useState<Participation[]>([]);

  const fetchSales = async (CompanyId: number) => {
    try {
      const response = await fetch(`${urlBase}/CompanySale/${CompanyId}`, {
        headers: {
          "id-festival": "2",
          Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
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

  const handleDeleteSale = async (id: number) => {
    if (!online) {
      showSnackBar({
        message: messages.internetError,
        severity: "error",
      });
      return;
    }
    try {
      const res = await fetch(`${urlBase}/CompanySale/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "id-festival": "2",
          "id-company": `${companyData?.id}`,
          Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
        },
      });
      const data = await res.json();
      if (data?.state && data?.data) {
        fetchSales(companyData?.id);
        showSnackBar({
          message: messages.saleDeleted,
          severity: "success",
        });
        return;
      }
      showSnackBar({
        message: messages.saleDeletedError,
        severity: "error",
      });
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    }
  };

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      <SalesReported
        value={sumCant(detailsData).toString()}
        isSalesReported={true}
      />
      <SalesReported
        isTitle={true}
        value={sumCantDay(detailsData).toString()}
        isSalesReported={true}
      />
      <StyledContainerSalesDetails>
        {orderArrayDesc(detailsData).map((detail) => (
          <SalesDetail
            key={detail.id}
            text={detail.cant}
            date={formatDateTime(new Date(detail.createdAt))}
            isSales={true}
            onClick={handleDeleteSale.bind(null, detail.id)}
          />
        ))}
      </StyledContainerSalesDetails>
    </Container>
  );
};

export default ReportsSalesDetails;
