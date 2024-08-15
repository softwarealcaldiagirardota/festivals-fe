import styled from "styled-components";
import { colorsDashboard } from "../../../../utils/utils";

interface CircleSmallProps {
  randomNumber: number;
}

const CircleSmall = styled("div")<CircleSmallProps>(({ randomNumber }) => ({
  width: "12px",
  height: "12px",
  backgroundColor: colorsDashboard[randomNumber],
  borderRadius: "50%",
  marginRight: "10px",
}));

const CircleComponent = ({ number }: { number: number }) => {
  return <CircleSmall randomNumber={number} />;
};

export default CircleComponent;
