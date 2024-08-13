import listaProgramacionMobile from "../../assets/lista-programacion-mobile.jpg";
import listaProgramacionDesktop from "../../assets/lista-programacion-desktop.jpg";
import { useHeader } from "../../context/header-context";
import { StyledContainer, StyledGoBack, StyledImage } from "./styles";
import { useNavigate } from "react-router-dom";

const ScheduleList = () => {
  const { isMobile } = useHeader();
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledGoBack onClick={() => navigate(-1)}>{"<"}</StyledGoBack>
      <StyledImage
        isList={true}
        isMobile={isMobile}
        src={isMobile ? listaProgramacionMobile : listaProgramacionDesktop}
        alt="Participantes feria del chicharrón Girardota"
      />
    </StyledContainer>
  );
};

export default ScheduleList;
