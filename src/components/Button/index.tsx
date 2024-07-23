import { ButtonStyled, StyledButton } from "./styles";

const contained = "contained";
interface IButton {
  variant?: "contained" | "outlined";
  text: string;
}
const Button = ({ variant = "contained", text }: IButton) => {
  return (
    <ButtonStyled
      isOutlined={variant === contained}
      variant={variant}
      color="primary"
    >
      <StyledButton>{text}</StyledButton>
    </ButtonStyled>
  );
};

export default Button;
