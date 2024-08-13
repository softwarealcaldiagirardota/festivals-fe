import calmaaMobile from "../../assets/calma-mobile.jpg";
import calmaDesktop from "../../assets/calma-desktop.jpg";
import { useHeader } from "../../context/header-context";
import { StyledContainer, StyledGoBack, StyledImage } from "./styles";
import { useNavigate } from "react-router-dom";

const Calm = () => {
  const { isMobile } = useHeader();
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledGoBack onClick={() => navigate(-1)}>{"<"}</StyledGoBack>
      <StyledImage
        isMobile={false}
        src={isMobile ? calmaaMobile : calmaDesktop}
        alt="Participantes feria del chicharrón Girardota"
      />
    </StyledContainer>
  );
};

export default Calm;
