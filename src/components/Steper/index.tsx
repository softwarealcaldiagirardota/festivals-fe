import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { CustomStepper } from "./styles";

interface ISteper {
  steps: string[];
  currentStep: number;
}
const Steper = ({ steps, currentStep = 0 }: ISteper) => {
  return (
    <CustomStepper alternativeLabel activeStep={currentStep}>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </CustomStepper>
  );
};

export default Steper;
