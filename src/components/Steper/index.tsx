import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CustomStepper } from "./styles";

interface ISteper {
  steps: string[];
}
const Steper = ({ steps }: ISteper) => {
  return (
    <CustomStepper alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </CustomStepper>
  );
};

export default Steper;
