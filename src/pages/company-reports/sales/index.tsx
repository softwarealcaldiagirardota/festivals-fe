import { useEffect, useState } from "react";
import BackArrow from "../../../components/BackArrow";
import { useHeader } from "../../../context/header-context";
import NumberButton from "../../../components/NumberButton";
import { StyledContainerSales, Container, StyledNumberButton } from "./styles";
import Number from "../../../components/Number/index.tsx";
import Button from "../../../components/Button/index.tsx";
import Title from "../../../components/Title/index.tsx";
import { useNavigate } from "react-router-dom";
import { messages, urlBase } from "../../../utils/utils.tsx";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const arrayNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const Sales = () => {
  const {
    setTitle,
    isMobile,
    online,
    showSnackBar,
    companyData,
    loading,
    setLoading,
  } = useHeader();
  const [value, setValue] = useState("");
  const { user } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    const capital = `${user?.nickname
      ?.charAt(0)
      .toUpperCase()}${user?.nickname?.slice(1)}`;
    setTitle(`Ventas ${capital}`);
  }, [user]);
  const [openDraweConfirm, setOpenDraweConfirm] = useState(false);

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
      const res = await fetch(`${urlBase}/CompanySale`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "id-festival": "2",
          "id-company": `${companyData?.id}`,
          Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
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
        message: messages.errorSavingSales,
        severity: "error",
      });
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  const handleClick = (value: string) =>
    setValue((prevValue) => prevValue.toString() + value.toString());

  const handleDeleteValues = () => setValue("");

  const handleNavigate = () => navigate("/company-reports/sales/detail");

  const handleClose = () => setOpenDraweConfirm((event) => !event);
  return (
    <>
      <Dialog
        open={openDraweConfirm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirme la venta"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro de enviar la venta?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            text="Cancelar"
            canContinue={true}
            variant="outlined"
          />
          <Button onClick={handleSubmit} text="Confirmar" canContinue={true} />
        </DialogActions>
      </Dialog>
      <Container isMobile={isMobile}>
        <BackArrow />
        <Number value={value?.length > 0 ? value : 0} />
        <StyledContainerSales>
          {arrayNumber.map((number) => (
            <NumberButton
              noData={!companyData?.id}
              key={number}
              onClick={handleClick.bind(null, number)}
              text={number}
            />
          ))}
          <StyledNumberButton onClick={handleDeleteValues}>
            <Title text="Borrar" type="small" />
          </StyledNumberButton>
        </StyledContainerSales>
        <Button
          onClick={handleClose}
          canContinue={loading ? false : parseInt(value) > 0}
          text="Enviar"
        />
        <Button
          variant="outlined"
          text="Ver registros"
          onClick={handleNavigate}
          canContinue={companyData?.id > 0}
        />
      </Container>
    </>
  );
};

export default Sales;
