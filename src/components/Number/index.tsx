import { StyledNumber } from "./styles";

interface INumber {
  value: string | number;
}
const Number = ({ value }: INumber) => {
  return <StyledNumber>{value}</StyledNumber>;
};

export default Number;
