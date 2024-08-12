import { StyledSplash, StyledTitle404, StyledTitle404Number } from "./styles";
import Title from "../Title";
import { useHeader } from "../../context/header-context";
import Button from "../Button";
import { voteAgain } from "../../utils/utils";

const NotExistCodeSplash = () => {
  const { isMobile } = useHeader();
  return (
    <StyledSplash isMobile={isMobile}>
      <Title
        text="El código no existe, ya se usó o no es válido."
        type="medium"
        color="white"
      />
      <StyledTitle404>Error</StyledTitle404>
      <StyledTitle404Number>404</StyledTitle404Number>
      <Button
        text="Intentar con otro código"
        canContinue={true}
        onClick={voteAgain}
      />
    </StyledSplash>
  );
};

export default NotExistCodeSplash;
