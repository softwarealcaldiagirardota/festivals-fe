import { useEffect, useState } from "react";
import { useHeader } from "../../context/header-context";
import Splash from "../../components/Splash";
import Title from "../../components/Title";
import {
  StyledBoxQuestion,
  StyledBoxVoting,
  StyledClientVotesView,
} from "./styles";
import Steper from "../../components/Steper";
import { Box, Rating } from "@mui/material";
import Button from "../../components/Button";

const steps = ["Sabor", "Presentación", "Satisfecho"];
const questions = [
  { id: 1, label: "¿Qué tal el sabor de este chicharrón?", step: 0 },
  { id: 2, label: "¿Qué tal la presentación del producto?", step: 1 },
  { id: 3, label: "¿Quedaste satisfecho con este chicharrón?", step: 2 },
];

const ClientVotes = () => {
  const { setTitle, isMobile } = useHeader();
  const [currentStep, setCurrentStep] = useState(0);
  const [nextStep, setNextStep] = useState(false);
  const [ratings, setRatings] = useState<{ [key: number]: number | null }>({
    1: null,
    2: null,
    3: null,
  });

  useEffect(() => {
    setTitle("Evaluación");
  }, []);

  const handleCurrentStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setNextStep((prev) => !prev);
  };

  const handlePreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleRatingChange =
    (id: number) => (event: React.SyntheticEvent, newValue: number | null) => {
      setNextStep(true);
      setRatings((prevRatings) => ({
        ...prevRatings,
        [id]: newValue,
      }));
    };

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSplash(false);
    }, 4000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      {!showSplash && (
        <StyledClientVotesView isMobile={isMobile}>
          <Title text="Postre de chicharrón" type="medium" />
          <Box sx={{ marginTop: "80px", width: "100%" }}>
            <Steper steps={steps} currentStep={currentStep} />
          </Box>
          {questions.map((question) => {
            if (question.step !== currentStep) return null;
            return (
              <StyledBoxQuestion>
                <Box sx={{ marginTop: "12px" }}>
                  <Title text={question.label} type="xs" />
                </Box>
                <StyledBoxVoting>
                  <Rating
                    max={4}
                    name="size-large"
                    onChange={handleRatingChange(question.id)}
                  />
                </StyledBoxVoting>
              </StyledBoxQuestion>
            );
          })}
          <Button
            text={currentStep > 1 ? "Guardar calificación" : "Siguiente"}
            canContinue={nextStep}
            onClick={
              currentStep === 2
                ? () => alert(JSON.stringify(ratings))
                : handleCurrentStep
            }
          />
          {currentStep > 0 && (
            <Button
              marginTop="12px"
              text="Anterior"
              onClick={handlePreviousStep}
              variant="outlined"
              canContinue={true}
            />
          )}
        </StyledClientVotesView>
      )}
    </>
  );
};

export default ClientVotes;
