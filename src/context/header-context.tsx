import { useMediaQuery } from "@mui/material";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { theme } from "../theme";
import { pathnamePermission } from "../utils/utils";

interface ISnackBarState {
  open?: boolean;
  message?: string;
}
interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  openDrawerMenu: boolean;
  setOpenDrawerMenu: (openDrawerMenu: boolean) => void;
  isMobile?: boolean;
  showSnackBar: (newState: ISnackBarState) => void;
  snackBarState: ISnackBarState;
  handleSnackBarClose: () => void;
  online?: boolean;
  showLoginButton?: boolean;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [online, setOnline] = useState<boolean>(navigator.onLine);
  const [title, setTitle] = useState<string>("");
  const [openDrawerMenu, setOpenDrawerMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [snackBarState, setSnackBarState] = useState<ISnackBarState>({
    open: false,
    message: "",
  });
  const showLoginButton = pathnamePermission.includes(window.location.pathname);

  useEffect(() => {
    window.addEventListener("online", function () {
      setOnline(navigator.onLine);
    });

    window.addEventListener("offline", function () {
      setOnline(navigator.onLine);
    });
  }, []);

  const handleSnackBarClose = () =>
    setSnackBarState({ message: "", open: false });

  const showSnackBar = (newState: ISnackBarState) => {
    setSnackBarState({ ...newState, open: true });
  };

  useEffect(() => {
    setOpenDrawerMenu(false);
  }, [title]);

  return (
    <HeaderContext.Provider
      value={{
        title,
        setTitle,
        openDrawerMenu,
        setOpenDrawerMenu,
        isMobile,
        showSnackBar,
        snackBarState,
        handleSnackBarClose,
        online,
        showLoginButton,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
