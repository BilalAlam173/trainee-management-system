import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

export const profileStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      minHeight: "600px",
      padding: "20px 20px",
      flexGrow: 1,
    },
    item: {
      border: "solid",
      height: "50px",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    fullWidth: {
      width: "100%",
    },
    border: {
      border: "solid",
    },

    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      color: "#E0FFFF",
      fontSize: "24px",
      fontWeight: 800,
      background: "#40E0D0",
    },
    actions: {
      textAlign: "center",
      marginTop: "30px",
    },
  })
);
