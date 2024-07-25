import { useNavigate } from "react-router-dom";
import { palette } from "../../theme";
import { formatDateTime } from "../../utils/utils";
import { StyledBackArrow, StyledBackArrowText } from "./styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const BackArrow = () => {
  const date = new Date();
  const navigate = useNavigate();
  return (
    <StyledBackArrow>
      <ChevronLeftIcon
        onClick={() => navigate(-1)}
        sx={{
          fontSize: "2rem",
          color: palette.primary.title,
          position: "absolute",
          left: "0",
        }}
      />
      <StyledBackArrowText>
        {`${formatDateTime(date)?.split("m.")[0]}m.`}
      </StyledBackArrowText>
    </StyledBackArrow>
  );
};

export default BackArrow;
