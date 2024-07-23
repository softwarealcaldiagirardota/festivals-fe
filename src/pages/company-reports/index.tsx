import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const CompanyReports = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Soy participante");
  }, []);

  return (
    <>
      <h1>Soy participante</h1>
    </>
  );
};

export default CompanyReports;
