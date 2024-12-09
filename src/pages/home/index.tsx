import { Link } from "react-router-dom";
import { StyledContainer, StyledImage } from "./styles";
import programacionMobile from "../../assets/background-temp.jpg";
import programacionDesktop from "../../assets/background-temp.jpg";
import evaluarParticipanteDesktop from "../../assets/background-temp.jpg";
import evaluarParticipanteMobile from "../../assets/background-temp.jpg";
import propuestaDesktop from "../../assets/background-temp.jpg";
import propuestaMobile from "../../assets/background-temp.jpg";

import { useHeader } from "../../context/header-context";

const HomeImage = () => {
  const { isMobile } = useHeader();
  return (
    <StyledContainer>
      <Link to="/client-votes">
        <StyledImage
          isMobile={isMobile}
          src={
            isMobile ? evaluarParticipanteMobile : evaluarParticipanteDesktop
          }
          alt="Calificación feria del chicharrón"
        />
      </Link>
      {/* <Link to="/home/dish-list">
        <StyledImage
          isMobile={isMobile}
          src={isMobile ? propuestaMobile : propuestaDesktop}
          alt="Participantes feria del chicharrón Girardota"
        />
      </Link>
      <Link to="/home/scheduled-list">
        <StyledImage
          isMobile={isMobile}
          src={isMobile ? programacionMobile : programacionDesktop}
          alt="Programación feria del chicharrón Girardota"
        />
      </Link> */}
    </StyledContainer>
  );
};

export default HomeImage;
