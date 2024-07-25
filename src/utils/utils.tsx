import {
  AddBusiness,
  Gavel,
  HowToVote,
  Poll,
  Receipt,
} from "@mui/icons-material";
import { palette } from "../theme";

const colorIcon = palette.neutral.B;
const fontSize = "18px";
export const menuItems = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: <Poll sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Participante",
    url: "/company-reports",
    icon: <AddBusiness sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Jurado",
    url: "/judge-votes",
    icon: <Gavel sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Proveedor",
    url: "/provider-reports",
    icon: <Receipt sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Calificar",
    url: "/client-votes",
    icon: <HowToVote sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
];

export const messages = {
  internetError:
    "Conexión a Internet no disponible. Por favor, inténtalo de nuevo más tarde.",
  genericError: "Se produjo un error. Por favor, inténtalo de nuevo.",
};
