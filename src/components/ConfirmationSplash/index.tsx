import { StyledLogo, StyledSplash } from "./styles";
import logo from "../../assets/splash-1.jpg";
import logoError from "../../assets/splash-2.jpg";
import Title from "../Title";
import Button from "../Button";
import { useHeader } from "../../context/header-context";
import { voteAgain } from "../../utils/utils";

interface IConfirmationSplash {
  isError?: boolean;
}

const ConfirmationSplash = ({ isError }: IConfirmationSplash) => {
  const { isMobile } = useHeader();
  return (
    <StyledSplash isMobile={isMobile}>
      <Title
        text="¡Gracias por tu calificación! "
        type="medium"
        color="white"
      />
      <StyledLogo src={isError ? logoError : logo} alt="Logo" />
      <Button text="Tengo otro código" canContinue={true} onClick={voteAgain} />
    </StyledSplash>
  );
};

export default ConfirmationSplash;
