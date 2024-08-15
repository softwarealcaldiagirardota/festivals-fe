import { useEffect, useState } from "react";
import { useHeader } from "../../context/header-context";
import { Container, ContainerDash } from "./styles";
import { Box, Grid } from "@mui/material";
import TotalCards from "./components/totals-card";
import CardsDetails from "./components/cards-details";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "../../components/Splash";
import { messages, urlBase } from "../../utils/utils";
import {
  SalesData,
  getDailySales,
  getDailySalesInMoney,
  getSalesMoneyPercentage,
  getSalesPercentage,
  getTotalSales,
  getTotalSalesInMoney,
  processSalesData,
  processSalesDataDay,
} from "./utils";

const Dashboard = () => {
  const { setTitle, showSnackBar } = useHeader();
  const [showSplash, setShowSplash] = useState(true);
  const [dashboardSalesData, setDashboardSalesData] = useState(null);
  const [dashboardSalesDataList, setDashboardSalesDataList] = useState<
    SalesData[] | null
  >(null);
  const [dashboardSalesDataListDay, setDashboardSalesDataListDay] = useState<
    SalesData[] | null
  >(null);

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
      const response = await fetch(
        `${urlBase}/CompanySale/companySalesTotalByDate`
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
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDashboardSalesData();
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

  return (
    <ContainerDash>
      {showSplash && <Splash />}
      {user?.email !== "admin@festival.com" && (
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
      {user?.email === "admin@festival.com" && dashboardSalesData && (
        <Grid container spacing={4}>
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
              percentage={20}
              type="sales"
              text="Cantidad votantes"
              total={2340}
            />
          </Grid>
          {dashboardSalesDataList && (
            <>
              <Grid item xs={12} lg={4}>
                <CardsDetails
                  dashboardSalesDataList={dashboardSalesDataList}
                  text="Ventas participantes"
                />
              </Grid>
              <Grid item xs={12} lg={4}>
                <CardsDetails
                  dashboardSalesDataList={dashboardSalesDataListDay}
                  text="Ventas participantes por día"
                />
              </Grid>
            </>
          )}
          {/* <Grid item xs={12} lg={4}>
            <CardsDetails text="Ventas por participante" />
          </Grid> */}
        </Grid>
      )}
    </ContainerDash>
  );
};

export default Dashboard;
