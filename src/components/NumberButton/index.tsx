import Title from "../Title";
import { StyledNumberButton } from "./styles";
interface INumberButton {
  text: string;
  onClick: () => void;
  noData: boolean;
}
const NumberButton = ({ text, onClick, noData }: INumberButton) => {
  return (
    <StyledNumberButton onClick={onClick} noData={noData}>
      <Title text={text} type="small" />
    </StyledNumberButton>
  );
};

export default NumberButton;
