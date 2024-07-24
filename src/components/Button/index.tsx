import { ButtonStyled, StyledButton } from "./styles";

const contained = "contained";
interface IButton {
  variant?: "contained" | "outlined";
  text: string;
  onClick?: () => void;
  canContinue?: boolean;
  marginTop?: string;
}
const Button = ({
  variant = "contained",
  text,
  onClick,
  canContinue,
  marginTop,
}: IButton) => {
  return (
    <ButtonStyled
      sx={{ marginTop: marginTop }}
      isOutlined={variant === contained}
      variant={variant}
      color="primary"
      onClick={onClick}
      disabled={!canContinue}
    >
      <StyledButton>{text}</StyledButton>
    </ButtonStyled>
  );
};

export default Button;
