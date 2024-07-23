import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const Dashboard = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Dashboard;
