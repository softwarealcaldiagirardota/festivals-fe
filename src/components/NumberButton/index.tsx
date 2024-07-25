import Title from "../Title";
import { StyledNumberButton } from "./styles";
interface INumberButton {
  text: string;
}
const NumberButton = ({ text }: INumberButton) => {
  return (
    <StyledNumberButton>
      <Title text={text} type="small" />
    </StyledNumberButton>
  );
};

export default NumberButton;
