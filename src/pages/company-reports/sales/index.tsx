import { useEffect } from "react";
import BackArrow from "../../../components/BackArrow";
import { useHeader } from "../../../context/header-context";

const Sales = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Registro de ventas");
  }, []);

  return (
    <>
      <BackArrow />
    </>
  );
};

export default Sales;
