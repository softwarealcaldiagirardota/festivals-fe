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

const steps = ["Sabor", "Presentación", "Satisfecho"];

const ClientVotes = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Evaluación");
  }, []);

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
        <StyledClientVotesView>
          <Title text="Postre de chicharrón" type="medium" />
          <Box sx={{ marginTop: "44px", width: "100%" }}>
            <Steper steps={steps} />
          </Box>
          <StyledBoxQuestion>
            <Box sx={{ marginTop: "12px" }}>
              <Title
                text="¿Qué tal el sabor de este chicarrón? "
                type="small"
              />
            </Box>
            <StyledBoxVoting>
              <Rating name="size-large" size="large" />
            </StyledBoxVoting>
          </StyledBoxQuestion>
        </StyledClientVotesView>
      )}
    </>
  );
};

export default ClientVotes;
