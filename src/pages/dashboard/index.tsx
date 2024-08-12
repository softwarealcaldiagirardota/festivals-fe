import { useEffect } from "react";
import { useHeader } from "../../context/header-context";
import { Container } from "./styles";
import { Box, Grid } from "@mui/material";
import TotalCards from "./components/totals-card";
import CardsDetails from "./components/cards-details";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { setTitle } = useHeader();
  const { user } = useAuth0();
  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  return (
    <Container>
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
      {user?.email === "admin@festival.com" && (
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
      )}
    </Container>
  );
};

export default Dashboard;
