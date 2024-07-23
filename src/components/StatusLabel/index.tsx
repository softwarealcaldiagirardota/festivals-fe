import { StyledStatusLabel } from "./styles";

interface IStatusLabel {
  value: string;
  handleClick?: () => void;
}
const StatusLabel = ({ value, handleClick }: IStatusLabel) => {
  return <StyledStatusLabel onClick={handleClick}>{value}</StyledStatusLabel>;
};

export default StatusLabel;
