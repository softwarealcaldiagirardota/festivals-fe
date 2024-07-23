import { StyledTextNumber } from "./styles";

interface ITextNumber {
  value: string;
}

const TextNumber = ({ value }: ITextNumber) => {
  return <StyledTextNumber>{value}</StyledTextNumber>;
};

export default TextNumber;
