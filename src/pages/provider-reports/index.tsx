import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const ProviderReports = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Soy proveedor");
  }, []);

  return (
    <>
      <h1>Soy proveedor</h1>
    </>
  );
};

export default ProviderReports;
