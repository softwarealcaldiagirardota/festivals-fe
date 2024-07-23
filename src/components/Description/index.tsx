import { StyledDescription } from "./styles";

interface IDescription {
  text: string;
  isSmall?: boolean;
}

const Description = ({ text, isSmall }: IDescription) => {
  return <StyledDescription isSmall={isSmall}>{text}</StyledDescription>;
};

export default Description;
