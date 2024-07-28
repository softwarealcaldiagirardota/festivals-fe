import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import TextNumber from "../../components/TextNumber/index.tsx";
import Button from "../../components/Button/index.tsx";
import Title from "../../components/Title/index.tsx";
import Description from "../../components/Description/index.tsx";
import Number from "../../components/Number/index.tsx";
import StatusLabel from "../../components/StatusLabel/index.tsx";

const Dashboard = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return (
    <>
      {/* <h1>Dashboard</h1> */}
      {/* <TextNumber value="€ / kg" />
      <Number value="1.41" />
      <Button text="Botón fondo entero" />
      <Button variant="outlined" text="Botón sin fondo" />
      <Title text="Título grande" />
      <Title text="Título mediano" type="medium" />
      <Title text="Título pequeño" type="small" />
      <Description text="Descripción grande" />
      <Description isSmall text="Descripción pequeño" />
      <StatusLabel value="Estado" /> */}
    </>
  );
};

export default Dashboard;
