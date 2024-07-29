import { useEffect, useState } from "react";
import BackArrow from "../../../components/BackArrow";
import { useHeader } from "../../../context/header-context";
import NumberButton from "../../../components/NumberButton";
import { StyledContainerSales, Container, StyledNumberButton } from "./styles";
import Number from "../../../components/Number/index.tsx";
import Button from "../../../components/Button/index.tsx";
import Title from "../../../components/Title/index.tsx";
import SalesReported from "../../../components/SalesReported/index.tsx";
import { useNavigate } from "react-router-dom";

const arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const Sales = () => {
  const { setTitle, isMobile } = useHeader();
  const [value, setValue] = useState("");
  const [reported, setReported] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Registro de ventas");
  }, []);

  const handleSumReported = () => setReported(value);

  const handleClick = (value: string) =>
    setValue((prevValue) => prevValue.toString() + value.toString());

  const handleDeleteValues = () => setValue("");

  const handleNavigate = () => navigate("/company-reports/sales/detail");

  return (
    <Container isMobile={isMobile}>
      <BackArrow />
      <SalesReported value={reported.toString()}isSalesReported={true} />
      <Number value={value?.length > 0 ? value : 0} />
      <StyledContainerSales>
        {arrayNumber.map((number) => (
          <NumberButton
            key={number}
            onClick={handleClick.bind(null, number)}
            text={number}
          />
        ))}
        <StyledNumberButton onClick={handleDeleteValues}>
          <Title text="Borrar" type="small" />
        </StyledNumberButton>
      </StyledContainerSales>
      <Button onClick={handleSumReported} canContinue={true} text="Enviar" />
      <Button
        variant="outlined"
        text="Ver registros"
        onClick={handleNavigate}
        canContinue={true}
      />
    </Container>
  );
};

export default Sales;
