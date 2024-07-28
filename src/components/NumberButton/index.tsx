import Title from "../Title";
import { StyledNumberButton } from "./styles";
interface INumberButton {
  text: string;
  onClick: () => void;
}
const NumberButton = ({ text, onClick }: INumberButton) => {
  return (
    <StyledNumberButton onClick={onClick}>
      <Title text={text} type="small" />
    </StyledNumberButton>
  );
};

export default NumberButton;
