import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import Actions from "../../components/Actions";
import logoAction1 from "../../assets/splash-2.jpg";
import { StyledContainerActions } from "./styles";
import { useNavigate } from "react-router-dom";

const CompanyReports = () => {
  const { setTitle, isMobile } = useHeader();
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Hola");
  }, [setTitle]);
  return (
    <StyledContainerActions isMobile={isMobile}>
      <Actions
        onClick={() => navigate("/company-reports/sales")}
        text="Ventas"
        logo={logoAction1}
      />
      {/* <Actions
        onClick={() => navigate("/company-reports/buys")}
        text="Compras"
        logo={logoAction2}
      /> */}
    </StyledContainerActions>
  );
};

export default CompanyReports;
