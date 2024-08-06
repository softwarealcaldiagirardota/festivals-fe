import { StyledNumber, StyledNumberDetail, StyledTitle } from "./styles";

const Title = ({
  text,
  isNumber,
  isNumberDetail,
}: {
  text: string;
  isNumber?: boolean;
  isNumberDetail?: boolean;
}) => {
  if (isNumber) return <StyledNumber>{text}</StyledNumber>;
  if (isNumberDetail) return <StyledNumberDetail>{text}</StyledNumberDetail>;
  return <StyledTitle>{text}</StyledTitle>;
};

export default Title;
