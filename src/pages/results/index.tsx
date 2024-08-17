import "./results.css";
import { useHeader } from "../../context/header-context";
import { useEffect, useState } from "react";
import fondoresultados from "../../assets/fondoresultados.jpg";

function Results() {
  const { dataResults } = useHeader();
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      setShowData(true);
    }, 10000);

    return () => {
      clearInterval(interval);
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
