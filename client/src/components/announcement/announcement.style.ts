import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
export const AnnouncementStyle = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
      marginTop: 70,
    },
    list: {},
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    item: {
      textAlign: "center",
    },
    green: {
      color: "#fff",
      backgroundColor: green[500],
    },
    headingText: {
      width: "100%",
    },
    messageText: {
      width: "100%",
    },
    appBar: {
      top: 0,
      bottom: "auto",
      width: 460,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: 30,
      right: 30,
      margin: "0 auto",
    },
    submitButton: {
      position: "absolute",
      zIndex: 1,
      top: 30,
      right: 90,
      margin: "0 auto",
    },
  })
);
