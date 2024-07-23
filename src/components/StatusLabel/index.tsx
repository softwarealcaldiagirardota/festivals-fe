import { StyledStatusLabel } from "./styles";

interface IStatusLabel {
  value: string;
}
const StatusLabel = ({ value }: IStatusLabel) => {
  return <StyledStatusLabel>{value}</StyledStatusLabel>;
};

export default StatusLabel;
