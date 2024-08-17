import "./results.css";
import { useHeader } from "../../context/header-context";
import { useEffect, useState } from "react";
import fondoresultados from "../../assets/fondoresultados.jpg";
import { formatter, urlBase } from "../../utils/utils";
import { getTotalSales, getTotalSalesInMoney } from "../dashboard/utils";

function Results() {
  const { dataResults, setDataResults } = useHeader();
  const [showData, setShowData] = useState(false);
  const [countDown, setCountDown] = useState(10);
  const [confettis, setConfettis] = useState([]);

  useEffect(() => {
    const confettiCount = 2000;
    const confettisArray: any = Array.from(
      { length: confettiCount },
      (_, i) => i
    );
    setConfettis(confettisArray);
  }, []);

  const fetchDashboardSalesData = async () => {
    try {
      const response = await fetch(
        `${urlBase}/CompanySale/companySalesTotalByDate`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data?.state && data?.data?.length > 0) {
        setDataResults({
          cant: formatter.format(getTotalSales(data?.data)),
          value: formatter.format(getTotalSalesInMoney(data?.data)),
        });
      }
    } catch (error) {
      console.log("***Error en fetchDashboardSalesData: ", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    const intervalFetch = setInterval(() => {
      fetchDashboardSalesData();
    }, 5000);

    const timeout = setTimeout(() => {
      setShowData(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(intervalFetch);
      clearTimeout(timeout);
      setShowData(false);
      setCountDown(10);
    };
  }, []);

  if (showData) {
    return (
      <>
        <img src={fondoresultados} alt="logo" className="logo" />

        <div className="confetti-container">
          {confettis.map((_, index) => (
            <div key={index} className="confetti" />
          ))}
        </div>
        <div className="container">
          <div id="countdown">
            <ul>
              <li>
                <span>{dataResults?.cant}</span>Recetas
              </li>
              <li>
                <span>${dataResults?.value}</span>Ingresos
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img src={fondoresultados} alt="logo" className="logo" />

        <div className="container">
          <h1 id="headline">¡Contemos juntos hacia los resultados!</h1>
          <div id="countdown">
            <ul>
              <li>
                <span>{countDown}</span>Segundos
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Results;
