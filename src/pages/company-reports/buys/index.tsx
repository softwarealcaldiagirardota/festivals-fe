import { useEffect, useState } from "react";
import BackArrow from "../../../components/BackArrow";
import { useHeader } from "../../../context/header-context";
import { Container } from "./styles";
import Button from "../../../components/Button/index.tsx";
import Title from "../../../components/Title/index.tsx";
import { useNavigate } from "react-router-dom";
import {
  StyledClientVotesView,
  StyledInputCodeContainer,
} from "../../client-votes/styles.ts";
import { TextField } from "@mui/material";
import { messages, urlBase } from "../../../utils/utils.tsx";

const Buys = () => {
  const { setTitle, isMobile, companyData, online, showSnackBar } = useHeader();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Registro de compras");
  }, []);

  const handleDeleteValues = () => setValue("");

  const handleNavigate = () => navigate("/company-reports/buys/detail");

  const handleSubmit = async () => {
    if (!online) {
      showSnackBar({
        message: messages.internetError,
        severity: "error",
      });
      return;
    }
    setLoading(true);
    const payload = [
      {
        cant: parseInt(value),
        idProduct: 1,
      },
    ];
    try {
      const res = await fetch(`${urlBase}/CompanyBuys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "id-festival": "2",
          "id-company": `${companyData?.id}`,
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data?.state && data?.data) {
        setValue("");
        showSnackBar({
          message: messages.saveSuccess,
          severity: "success",
        });
        return;
      }
      showSnackBar({
        message: messages.errorSavingBuys,
        severity: "error",
      });
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
      handleDeleteValues();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValue(value);
  };

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      <StyledClientVotesView isMobile={isMobile}>
        <Title
          text="Introduce la cantidad de kilos comprados"
          type="xs"
          isMenu
        />
        <StyledInputCodeContainer>
          <TextField
            value={value}
            label="Cantidad"
            variant="outlined"
            fullWidth
            type="number"
            disabled={companyData?.id === 0 || !companyData?.id}
            onChange={handleInputChange}
          />
        </StyledInputCodeContainer>
        <Button
          text="Enviar"
          canContinue={loading ? false : parseInt(value) > 0}
          onClick={handleSubmit}
        />
        <Button
          variant="outlined"
          text="Ver registros"
          onClick={handleNavigate}
          canContinue={companyData?.id > 0}
        />
      </StyledClientVotesView>
    </Container>
  );
};

export default Buys;
