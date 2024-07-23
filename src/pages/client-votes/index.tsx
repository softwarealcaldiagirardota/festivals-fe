import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const ClientVotes = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Calificación");
  }, []);

  return (
    <>
      <h1>Calificación</h1>
    </>
  );
};

export default ClientVotes;
