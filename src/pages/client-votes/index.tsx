import { useEffect, useState } from "react";
import { useHeader } from "../../context/header-context";
import Splash from "../../components/Splash";

const ClientVotes = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Calificación");
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
      <h1>Calificación</h1>
    </>
  );
};

export default ClientVotes;
