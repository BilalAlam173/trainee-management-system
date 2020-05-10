import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { getAllBatches } from "../../services/batch-list.service";
// import tileData from './tileData';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "100%",
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);
const tileData = getAllBatches();

export function BatchList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={12} className={classes.gridList}>
        <GridListTile key="Subheader" cols={12} style={{ height: "auto" }}>
          <ListSubheader component="div">
            PNS Jauhar Current Batches
          </ListSubheader>
        </GridListTile>
        {tileData.map((tile: any) => (
          <GridListTile key={tile.key} cols={3}>
            <Link to={"/dashboard/trainee-list/" + tile.key}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    {tile.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
