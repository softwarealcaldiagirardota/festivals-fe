import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Backdrop } from "@mui/material";
import { useHeader } from "../../context/header-context";
import Title from "../Title";
import { palette } from "../../theme";
import { useNavigate } from "react-router-dom";
import {
  AddBusiness,
  Gavel,
  HowToVote,
  Poll,
  Receipt,
} from "@mui/icons-material";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const { setOpenDrawerMenu, openDrawerMenu } = useHeader();
  const navigate = useNavigate();
  const handleDrawerClose = () => {
    setOpenDrawerMenu(false);
  };

  const handleNavigate = (url: string) => navigate(url);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: palette.primary.background,
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawerMenu}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              label: "Dashboard",
              url: "/dashboard",
              icon: <Poll sx={{ color: palette.primary.title }} />,
            },
            {
              label: "Soy participante",
              url: "/company-reports",
              icon: <AddBusiness sx={{ color: palette.primary.title }} />,
            },
            {
              label: "Soy Juez",
              url: "/judge-votes",
              icon: <Gavel sx={{ color: palette.primary.title }} />,
            },
            {
              label: "Soy proveedor",
              url: "/provider-reports",
              icon: <Receipt sx={{ color: palette.primary.title }} />,
            },
            {
              label: "Calificar",
              url: "/client-votes",
              icon: <HowToVote sx={{ color: palette.primary.title }} />,
            },
          ].map((item, index) => (
            <ListItem key={index} onClick={handleNavigate.bind(null, item.url)}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <Title isMenu text={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer - 1 }}
        open={openDrawerMenu}
        onClick={handleDrawerClose}
      />
    </Box>
  );
}
