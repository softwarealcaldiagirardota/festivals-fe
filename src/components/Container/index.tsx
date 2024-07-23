import { ReactNode } from "react";
import { StyledHeader } from "./styles";

interface IContainer {
  children: ReactNode;
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export default Container;
