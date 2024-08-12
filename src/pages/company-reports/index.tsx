import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import Actions from "../../components/Actions";
import logoAction1 from "../../assets/splash-2.png";
import logoAction2 from "../../assets/splash-3.png";
import { StyledContainerActions } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



const CompanyReports = () => {
  const { setTitle, isMobile } = useHeader();
  const navigate = useNavigate();
  const { user } = useAuth0();

  useEffect(() => {
    if (user && user.nickname) {
      const capital =  user.nickname.charAt(0).toUpperCase()  + user.nickname.slice(1);
      setTitle(`Hola ${capital}`);
    }else{
      setTitle("Hola")
    }
  }, [user, setTitle]);
  return (
    <StyledContainerActions isMobile={isMobile}>
      <Actions
        onClick={() => navigate("/company-reports/sales")}
        text="Ventas"
        logo={logoAction1}
      />
      <Actions
        onClick={() => navigate("/company-reports/buys")}
        text="Compras"
        logo={logoAction2}
      />
    </StyledContainerActions>
  );
};

export default CompanyReports;
