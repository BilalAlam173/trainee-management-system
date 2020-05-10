import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";

export const eventStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        borderBottom: "unset",
      },
    },
    actions: {
      textAlign: "center",
      marginTop: "30px",
      marginBottom: "30px",
    },
    actionBtns: {
      marginRight: "10px",
    },
    fullWidth: {
      width: "100%",
    },
  })
);
