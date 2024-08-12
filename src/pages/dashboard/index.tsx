import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import { Container } from "./styles";
import { Grid } from "@mui/material";
import TotalCards from "./components/totals-card";
import CardsDetails from "./components/cards-details";

const Dashboard = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={3}>
          <TotalCards
            percentage={130}
            type="sales"
            text="Total ventas"
            total={68457}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TotalCards
            percentage={130}
            type="money"
            text="Total en pesos"
            total={102456014}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <TotalCards
            percentage={55}
            type="sales"
            text="Ventas del día"
            total={25863}
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
        <Grid item xs={12} lg={4}>
          <CardsDetails text="Ventas por participante" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardsDetails text="Ventas por participante" />
        </Grid>
        <Grid item xs={12} lg={4}>
          <CardsDetails text="Ventas por participante" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
