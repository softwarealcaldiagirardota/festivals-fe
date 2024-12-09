import calmaaMobile from "../../assets/background-temp.jpg";
import calmaDesktop from "../../assets/background-temp.jpg";
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
