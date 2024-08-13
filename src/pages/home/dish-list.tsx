import listaPropuestaMobile from "../../assets/lista-propuesta-mobile.jpg";
import listaPropuestaDesktop from "../../assets/lista-propuesta-desktop.jpg";
import { useHeader } from "../../context/header-context";
import { StyledContainer, StyledGoBack, StyledImage } from "./styles";
import { useNavigate } from "react-router-dom";

const DishList = () => {
  const { isMobile } = useHeader();
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledGoBack onClick={() => navigate(-1)}>{"<"}</StyledGoBack>
      <StyledImage
        isList={true}
        isMobile={isMobile}
        src={isMobile ? listaPropuestaMobile : listaPropuestaDesktop}
        alt="Participantes feria del chicharrón Girardota"
      />
    </StyledContainer>
  );
};

export default DishList;
