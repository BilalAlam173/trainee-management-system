import React, { useEffect } from "react";
import clsx from "clsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { About } from "../about/about";
import { TraineeList } from "../trainee-list/trainee-list";
import { BatchList } from "../batch-list/batch-list";
import { LeaveRequest } from "../leave-request/leave-request";
import { Event } from "../event/event";
import { useHistory, useLocation } from "react-router-dom";
import { dashboardStyle } from "./dashboard.css";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

import { MenuItem, DashboardService } from "./dashboard.service";
import { USER_ROLES } from "../../globals";
import { Announcement } from "../announcement/announcement";

const useStyles = dashboardStyle;
const service = DashboardService;

const setMenu = (role: USER_ROLES) => {
  service.currentMenu =
    role == USER_ROLES.APPOINTMENT_HOLDER
      ? service.appointmentHolderMenu
      : service.adminMenu;
};

export function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const initState = {
    menuOpened: true,
    notiOpened: false,
    username: "test",
  };
  const [state, setState] = React.useState(initState);
  const { path, url } = useRouteMatch();
  const location = useLocation();
  setMenu(Number(localStorage.getItem("role")));

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setMenu(Number(localStorage.getItem("role")));
      setState({ ...state, username: localStorage.getItem("username") || "" });
      console.log("currentMenu", service.currentMenu);
    }
  }, [location]);

  const history = useHistory();

  const handleDrawer = () => {
    setState({ ...state, menuOpened: !state.menuOpened });
  };
  const handleNoti = () => {
    setState({ ...state, notiOpened: !state.notiOpened });
  };

  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };

  console.log("render", service.currentMenu.length);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: state.menuOpened,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: state.menuOpened,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            PNS Jauhar Trainee Management System
          </Typography>
          <IconButton
            color="inherit"
            className={classes.notiBtn}
            onClick={handleNoti}
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" className={classes.profileBtn}>
            <AccountBoxIcon />
          </IconButton>
          <IconButton
            color="inherit"
            className={classes.logoutBtn}
            onClick={logout}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: state.menuOpened,
          [classes.drawerClose]: !state.menuOpened,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: state.menuOpened,
            [classes.drawerClose]: !state.menuOpened,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" noWrap align="left">
            {state.username}
          </Typography>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {service.currentMenu.map((item, index) => (
            <Link to={url + item.route} className={classes.navText}>
              <ListItem button key={item.text}>
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.text}></ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouteContainer />
      </main>
      <Divider />
      <Drawer
        anchor="right"
        open={state.notiOpened}
        onClose={handleNoti}
        className={classes.notiOpen}
        // className={clsx(classes.drawer, {
        //   [classes.notiOpen]: state.notiOpened,
        //   [classes.notiClose]: !state.notiOpened,
        // })}
        // classes={{
        //   paper: clsx({
        //     [classes.notiOpen]: state.notiOpened,
        //     [classes.notiClose]: !state.notiOpened,
        //   }),
        // }}
      >
        <div className={classes.notiOpen}>
          <Announcement />
        </div>
      </Drawer>
    </div>
  );
}

function RouteContainer() {
  return (
    <Switch>
      <Route exact path="/dashboard">
        <About />
      </Route>
      <Route path="/dashboard/about">
        <About />
      </Route>
      <Route path="/dashboard/trainee-list">
        <TraineeList />
      </Route>
      <Route path="/dashboard/batch-list">
        <BatchList />
      </Route>
      <Route path="/dashboard/leave-request">
        <LeaveRequest />
      </Route>
      <Route path="/dashboard/event">
        <Event />
      </Route>
    </Switch>
  );
}
