import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

export const leaveRequestStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    childTabsContainer: {
      display: "flex",
      flexGrow: 1,
    },
    childTabHeader: {
      borderRight: "solid 0.2px",
      //   flexGrow: 0,
    },
    childTab: {
      //   width: "100%",
      height: 150,
    },
    childTabContent: {
      width: "100%",
      padding: "30px 30px 30px 30px",
      //   flexGrow: 1,
    },
  })
);
