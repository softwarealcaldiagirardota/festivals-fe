import { useEffect, useState } from "react";
import { useHeader } from "../../context/header-context";
import Splash from "../../components/Splash";
import Title from "../../components/Title";
import {
  StyledBoxQuestion,
  StyledBoxVoting,
  StyledClientVotesView,
  StyledInputCodeContainer,
} from "./styles";
import Steper from "../../components/Steper";
import { Box, Rating } from "@mui/material";
import Button from "../../components/Button";
import ConfirmationSplash from "../../components/ConfirmationSplash";
import {
  getCodeUser,
  messages,
  urlBase,
  validateCodeStructure,
} from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { IClientVotes, Question, Survey, steps } from "./interfaces";
import NotExistCodeSplash from "../../components/NotExistCodeSplash";
import InputFieldCode from "../../components/InputFieldCode";

const ClientVotes = () => {
  const { setTitle, isMobile, showSnackBar, online } = useHeader();
  const [dataQuestions, setDataQuestions] = useState({} as Survey);
  const [dataCompany, setDataCompany] = useState({} as IClientVotes);
  const [notExistCode, setNotExistCode] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [nextStep, setNextStep] = useState(false);
  const [saved, setSaved] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [showQuestion, setshowQuestion] = useState(false);
  const [ratings, setRatings] = useState<{ [key: number]: number | null }>({
    1: null,
    2: null,
    3: null,
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get("code");

  const fetchCompanyName = async (codeInput?: string) => {
    try {
      const companyCode = codeInput
        ? getCodeUser(codeInput)
        : getCodeUser(code);
      const response = await fetch(`${urlBase}/Company/code/${companyCode}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data?.data?.id === 0) {
        setShowSplash(false);
        setNotExistCode(true);
      } else {
        setDataCompany(data?.data);
        if (codeInput) {
          setshowQuestion(true);
          setShowSplash(false);
        }
      }
    } catch (error) {
      setShowSplash(false);
      showSnackBar({
        message: messages.errorGettingCompanyName,
        severity: "error",
      });
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`${urlBase}/Festival/2`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const newQuestions = data?.data?.question?.map(
        (question: Question, index: number) => {
          return { ...question, step: index };
        }
      );
      const newData = { ...data?.data, question: newQuestions };
      setDataQuestions(newData);
    } catch (error) {
      setShowSplash(false);
      showSnackBar({
        message: messages.errorGettingQuestions,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    setTitle(showQuestion ? "Evaluar producto" : "Verificar código");
    if (dataCompany?.id !== 0 && dataQuestions?.question?.length > 0)
      setShowSplash(false);
  }, [dataCompany?.description, dataQuestions?.question?.length]);

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
      console.log(event);
    };

  const handleSubmit = async () => {
    if (!online) {
      showSnackBar({
        message: messages.internetError,
        severity: "error",
      });
      return;
    }
    const payload = Object.entries(ratings).map(([key, value]) => ({
      idQuestion: parseInt(key),
      idAnswer: value,
    }));
    try {
      const res = await fetch(`https://api.feriasgirardota.com/Vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          code: code || codeInput,
          "id-festival": "2",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data?.state && !data?.data) {
        setNotExistCode(true);
        return;
      }
      setSaved(true);
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
      if (code) {
        fetchCompanyName();
        setshowQuestion(true);
        return;
      }
      setShowSplash(false);
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleValidateCode = () => {
    setShowSplash(true);
    fetchCompanyName(codeInput);
  };

  return (
    <>
      {saved && <ConfirmationSplash />}
      {notExistCode && <NotExistCodeSplash />}
      {showSplash && <Splash />}
      {!showQuestion && (
        <StyledClientVotesView isMobile={isMobile}>
          <Title text="Introduce el código para votar" type="xs" isMenu />
          <StyledInputCodeContainer>
            <InputFieldCode setCode={setCodeInput} code={codeInput} />
          </StyledInputCodeContainer>
          <Button
            text="Continuar"
            canContinue={validateCodeStructure(codeInput) ? true : false}
            onClick={handleValidateCode}
          />
        </StyledClientVotesView>
      )}
      {!showSplash && showQuestion && (
        <StyledClientVotesView isMobile={isMobile}>
          <Title text={dataCompany?.description?.split("-")[1]} type="medium" />
          <Title
            isMenu
            text={dataCompany?.description?.split("-")[0]}
            type="xs"
          />
          <Box sx={{ marginTop: "40px", width: "100%" }}>
            <Steper steps={steps} currentStep={currentStep} />
          </Box>
          {dataQuestions?.question?.map((question) => {
            if (question.step !== currentStep) return null;
            return (
              <StyledBoxQuestion key={question.description}>
                <Box sx={{ marginTop: "12px" }}>
                  <Title text={question.description} type="xs" />
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
            onClick={currentStep === 2 ? handleSubmit : handleCurrentStep}
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
