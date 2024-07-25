import styled from "@emotion/styled";

const StyledContainerActions = styled("div")(
  ({ isMobile }: { isMobile?: boolean }) => ({
    display: "flex",
    flexDirection: "column" as const,
    alignItems: " flex-start",
    justifyContent: " flex-start",
    width: isMobile ? "100%" : "25%",
  })
);

export { StyledContainerActions };
