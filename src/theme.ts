import { createTheme, Palette } from "@mui/material";

declare module "@mui/material" {
  interface Color {
    main: string;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    vivid: Record<string, string>;
  }
}
const oldTheme = createTheme();
interface PropColor {
  contrastText: string;
  light: string;
  main: string;
  dark: string;
  title?: string;
  description?: string;
  statusLabel?: string;
  background?: string;
  0?: string;
  1?: string;
  2?: string;
  3?: string;
  4?: string;
  5?: string;
  6?: string;
}

type NeutralColor = {
  B: string;
  W: string;
  black: string;
  white: {
    "0": string;
    "1": string;
  };
  "0a": string;
  transparent: string;
  shadow: string;
};
export interface PropsPalette extends Palette {
  primary: PropColor;
  neutral: NeutralColor;
}
export const palette: PropsPalette = {
  ...oldTheme.palette,
  background: {
    default: "#FCFCFF",
    paper: "#fff",
  },
  primary: {
    ...oldTheme.palette.primary,
    title: "#2D0C57",
    light: "#EDDFFF",
    main: "#0BCE83",
    dark: "#410F92",
    description: "#9586A8",
    statusLabel: "#7203FF",
    background: "#F6F5F5",
    "1": "#513CE1",
    "2": "#29D99A",
    "3": "#FDB600",
    "4": "#F13F5E",
    "5": "#086BFF",
  },
  neutral: {
    B: "#282A30",
    W: "#FFFFFF",
    black: "#282A30",
    white: {
      "0": "#FFFFFF",
      "1": "#FEFEFE",
    },
    "0a": "#E9EBF8",
    transparent: "transparent",
    shadow: "#0000001a",
  },
};

export const statusColor = {
  info: {
    primary: palette.primary[5],
  },
  warning: {
    primary: palette.primary[3],
  },
  error: {
    primary: palette.primary[4],
  },
  success: {
    primary: palette.primary[2],
  },
};
export const primary = palette.primary;
export const secondary = palette.secondary;
export const neutral = palette.neutral;

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto Condensed, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: palette.primary.main,
    },
    background: {
      default: palette.primary.background,
    },
  },
});