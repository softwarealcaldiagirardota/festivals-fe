import { StyledLogo, StyledSplash } from "./styles";
import logo from "../../assets/splash-1.png";
import logoError from "../../assets/splash-2.png";
import Title from "../Title";
import Button from "../Button";
import { useHeader } from "../../context/header-context";

interface IConfirmationSplash {
  isError?: boolean;
}

const ConfirmationSplash = ({ isError }: IConfirmationSplash) => {
  const handleSubmit = () => (window.location.href = "http://localhost:5173");
  const { isMobile } = useHeader();
  return (
    <StyledSplash isMobile={isMobile}>
      <Title
        text="¡Gracias por tu calificación! "
        type="medium"
        color="white"
      />

      <StyledLogo src={isError ? logoError : logo} alt="Logo" />
      <Title
        text="¿Te gustaría probar otro chicharrón?"
        type="small"
        color="white"
      />
      <Button text="Vamos" canContinue={true} onClick={handleSubmit} />
    </StyledSplash>
  );
};

export default ConfirmationSplash;
