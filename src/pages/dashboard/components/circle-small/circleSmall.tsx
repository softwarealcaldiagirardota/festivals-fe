import styled from "styled-components";
import { palette } from "../../../../theme";

const CircleSmall = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${palette.primary.statusLabel};
  border-radius: 50%;
  margin-right: 10px;
`;

const CircleComponent = () => {
  return <CircleSmall />;
};

export default CircleComponent;
