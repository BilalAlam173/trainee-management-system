import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
export const requestListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    itemContent: {
      width: "100%",
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
    actions: {
      textAlign: "center",
      marginTop: "30px",
    },
    actionBtns: {
      marginRight: "10px",
    },
    statusBar: {
      position: "absolute",
      right: "10%",
    },
    paper: {
      width: "100%",
      height: "600px",
    },
    halfWidth: {
      width: "50%",
    },
  })
);
