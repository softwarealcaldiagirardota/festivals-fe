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
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Backdrop } from "@mui/material";
import { useHeader } from "../../context/header-context";
import Title from "../Title";
import { palette } from "../../theme";
import { useNavigate } from "react-router-dom";

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
            { label: "Dashboard", url: "/dashboard" },
            { label: "Soy participante", url: "/company-reports" },
            { label: "Soy Juez", url: "/judge-votes" },
            { label: "Soy proveedor", url: "/provider-reports" },
            { label: "Calificar", url: "/client-votes" },
          ].map((item, index) => (
            <ListItem key={index} onClick={handleNavigate.bind(null, item.url)}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
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
