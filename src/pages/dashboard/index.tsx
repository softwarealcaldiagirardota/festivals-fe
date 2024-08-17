import { useEffect, useState } from "react";
import { useHeader } from "../../context/header-context";
import { ContainerDash } from "./styles";
import { Box, Grid } from "@mui/material";
import TotalCards from "./components/totals-card";
import CardsDetails from "./components/cards-details";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "../../components/Splash";
import { dominioBase, formatter, messages, urlBase } from "../../utils/utils";
import {
  SalesData,
  getDailySales,
  getDailySalesInMoney,
  getSalesMoneyPercentage,
  getSalesPercentage,
  getTotalSales,
  getTotalSalesInMoney,
  mergeArraysByCompanyId,
  processSalesData,
  processSalesDataDay,
  sumTotalVotes,
} from "./utils";
import Button from "../../components/Button";
import CardsVotes from "./components/cards-votes";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { setTitle, showSnackBar, setDataResults, isMobile } = useHeader();
  const [showSplash, setShowSplash] = useState(true);
  const [dashboardSalesData, setDashboardSalesData] = useState(null);
  const [dashboardSalesDataList, setDashboardSalesDataList] = useState<
    SalesData[] | null
  >(null);
  const [restOfData, setRestOfData] = useState({
    totalVotesByCompany: [],
    avgByAnswer: [],
    avgTotalWinner: [],
  });
  const [dashboardSalesDataListDay, setDashboardSalesDataListDay] = useState<
    SalesData[] | null
  >(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const { user } = useAuth0();
  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  useEffect(() => {
    if (dashboardSalesData) {
    }
  }, [dashboardSalesData]);

  const fetchDashboardSalesData = async () => {
    try {
      setLoading(true);
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
        setShowSplash(false);
        setDashboardSalesData(data?.data);
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchTotalVotesByCompany = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${dominioBase}/Vote/TotalVotesByCompany`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data?.state && data?.data?.length > 0) {
        setShowSplash(false);
        setRestOfData((prevState) => ({
          ...prevState,
          totalVotesByCompany: data?.data,
        }));
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAvgByAnswer = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${dominioBase}/Vote/TotalAVGVotesByCompany`,
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
        setShowSplash(false);
        setRestOfData((prevState) => ({
          ...prevState,
          avgByAnswer: data?.data,
        }));
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAvgTotalWinner = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${dominioBase}/Vote/TotalVotesAVG`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenUser")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data?.state && data?.data?.length > 0) {
        setShowSplash(false);
        setRestOfData((prevState) => ({
          ...prevState,
          avgTotalWinner: data?.data,
        }));
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      showSnackBar({
        message: messages.genericError,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardSalesData();
    fetchTotalVotesByCompany();
    fetchAvgByAnswer();
    fetchAvgTotalWinner();
    const interval = setInterval(() => {
      setShowSplash(false);
    }, 2000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (dashboardSalesData) {
      setDashboardSalesDataList(processSalesData(dashboardSalesData));
    }
    if (dashboardSalesData) {
      setDashboardSalesDataListDay(processSalesDataDay(dashboardSalesData));
    }
  }, [dashboardSalesData]);

  const handleRefresh = () => {
    fetchDashboardSalesData();
    fetchTotalVotesByCompany();
    fetchAvgByAnswer();
    fetchAvgTotalWinner();
  };

  useEffect(() => {
    if (dashboardSalesData) {
      setDataResults({
        cant: formatter.format(getTotalSales(dashboardSalesData)),
        value: formatter.format(getTotalSalesInMoney(dashboardSalesData)),
      });
    }
  }, [dashboardSalesData]);

  return (
    <ContainerDash>
      {showSplash && <Splash />}
      {user?.email !== "admin@festival.com" &&
        user?.email !== "resultados@festival.com" && (
          <Grid container spacing={4}>
            <Grid item xs={12} lg={3}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                No tienes permiso para ver esta página
              </Box>
            </Grid>
          </Grid>
        )}
      {user?.email === "resultados@festival.com" &&
        dashboardSalesData &&
        !isMobile && (
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                text="Ver resultados"
                onClick={() => navigate("/results")}
                canContinue={!loading}
              />
            </Grid>
          </Grid>
        )}
      {user?.email === "admin@festival.com" && dashboardSalesData && (
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              text="Refrescar dashboard"
              onClick={handleRefresh}
              canContinue={!loading}
            />
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              text="Ver resultados"
              onClick={() => navigate("/results")}
              canContinue={!loading}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TotalCards
              percentage={getSalesPercentage(dashboardSalesData)}
              type="sales"
              text="Total ventas"
              total={getTotalSales(dashboardSalesData)}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TotalCards
              percentage={getSalesMoneyPercentage(dashboardSalesData)}
              type="money"
              text="Total en pesos"
              total={getTotalSalesInMoney(dashboardSalesData)}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TotalCards
              percentage={100}
              type="sales"
              subtype="day"
              text="Ventas del día"
              total={getDailySales(dashboardSalesData)}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TotalCards
              percentage={100}
              type="money"
              subtype="day"
              text="Total en pesos del día"
              total={getDailySalesInMoney(dashboardSalesData)}
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TotalCards
              percentage={Number(
                (
                  (sumTotalVotes(restOfData.totalVotesByCompany) /
                    getTotalSales(dashboardSalesData)) *
                  100
                )?.toFixed(2)
              )}
              type="sales"
              text={`Cantidad votos - Meta: ${
                getTotalSales(dashboardSalesData) / 2
              }`}
              total={sumTotalVotes(restOfData.totalVotesByCompany)}
            />
          </Grid>
          <Grid item xs={12} lg={3} style={{ opacity: 0.3 }}>
            <TotalCards
              percentage={0}
              type="sales"
              text="Compras - próximamente"
              total={0}
            />
          </Grid>
          <Grid item xs={12} lg={3} style={{ opacity: 0.3 }}>
            <TotalCards
              percentage={0}
              type="sales"
              text="Jurados - proximamente"
              total={0}
            />
          </Grid>
          <Grid item xs={12} lg={3} style={{ opacity: 0.3 }}>
            <TotalCards
              percentage={0}
              type="sales"
              text="Reportes - proximamente"
              total={0}
            />
          </Grid>
          {dashboardSalesDataList && (
            <>
              <Grid item xs={12} lg={6}>
                <CardsDetails
                  dashboardSalesDataList={dashboardSalesDataList}
                  text="Ventas participantes"
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <CardsDetails
                  dashboardSalesDataList={dashboardSalesDataListDay}
                  text="Ventas participantes por día"
                />
              </Grid>
            </>
          )}
          {restOfData && (
            <>
              <Grid item xs={12} lg={6}>
                <CardsVotes
                  dashboardSalesDataList={mergeArraysByCompanyId(
                    restOfData.totalVotesByCompany,
                    restOfData.avgTotalWinner
                  )}
                  text="Votos"
                />
              </Grid>
            </>
          )}
        </Grid>
      )}
    </ContainerDash>
  );
};

export default Dashboard;
