import { Link } from "react-router-dom";
import { StyledContainer, StyledImage } from "./styles";
import programacionMobile from "../../assets/programacion-mobile.jpg";
import programacionDesktop from "../../assets/programacion-desktop.jpg";
import evaluarParticipante from "../../assets/evaluar-participante.jpg";
import propuestaDesktop from "../../assets/propuesta-desktop.jpg";
import propuestaMobile from "../../assets/propuesta-mobile.jpg";

import { useHeader } from "../../context/header-context";

const HomeImage = () => {
  const { isMobile } = useHeader();
  return (
    <StyledContainer>
      <Link to="/home/dish-list">
        <StyledImage
          src={isMobile ? propuestaMobile : propuestaDesktop}
          alt="Participantes feria del chicharrón Girardota"
        />
      </Link>
      <Link to="/home/scheduled-list">
        <StyledImage
          src={isMobile ? programacionMobile : programacionDesktop}
          alt="Programación feria del chicharrón Girardota"
        />
      </Link>
      <Link to="/client-votes">
        <StyledImage
          src={evaluarParticipante}
          alt="Calificación feria del chicharrón"
        />
      </Link>
    </StyledContainer>
  );
};

export default HomeImage;
