import { useEffect } from "react";
import BackArrow from "../../../components/BackArrow";
import { useHeader } from "../../../context/header-context";

const Buys = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Registro de compras");
  }, []);
  return (
    <>
      <BackArrow />
    </>
  );
};

export default Buys;
