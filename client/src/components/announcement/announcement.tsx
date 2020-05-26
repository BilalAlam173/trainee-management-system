import React, { useEffect } from "react";
import { AnnouncementStyle } from "./announcement.style";
import { AnnouncementService, Notification } from "./announcement.service";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import { USER_ROLES, isAdmin, currentUser } from "../../globals";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import {
  getAllAnnouncements,
  addAnnouncement,
} from "../../services/data.service";

export function Announcement() {
  const classes = AnnouncementStyle();
  const service = AnnouncementService;
  const initState = {
    showAddForm: false,
    data: [] as any[],
    newAnnouncement: {
      header: "",
      message: "",
    },
  };

  let [state, setState] = React.useState(initState);

  const getData = async () => {
    const data = await getAllAnnouncements();
    setState({
      showAddForm: false,
      data,
      newAnnouncement: {
        header: "",
        message: "",
      },
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const showAddForm = () => {
    setState({ ...state, showAddForm: true });
  };

  const hideAddForm = () => {
    setState({ ...state, showAddForm: false });
  };

  const submit = async () => {
    await addAnnouncement({
      admin: currentUser()._id,
      ...state.newAnnouncement,
    });
    getData();
    hideAddForm();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.text} variant="h5" gutterBottom>
              Announcements
            </Typography>
            {state.showAddForm ? (
              <div>
                <Fab
                  color="secondary"
                  aria-label="close"
                  className={classes.fabButton}
                  onClick={hideAddForm}
                >
                  <CloseIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="close"
                  className={classes.submitButton}
                  onClick={submit}
                >
                  OK
                </Fab>
              </div>
            ) : (
              isAdmin() && (
                <Fab
                  color="secondary"
                  aria-label="add"
                  className={classes.fabButton}
                  onClick={showAddForm}
                >
                  <AddIcon />
                </Fab>
              )
            )}
            <div className={classes.grow} />
          </Toolbar>
        </AppBar>

        <List className={classes.list}>
          {state.showAddForm && (
            <React.Fragment key="0">
              <ListItem button>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={3}>
                    <ListItemAvatar>
                      {currentUser()?.role == USER_ROLES.ADMIN ? (
                        <Avatar className={classes.green}>
                          <SupervisorAccountIcon />
                        </Avatar>
                      ) : (
                        <Avatar className={classes.pink}>
                          <LocalHospitalIcon />
                        </Avatar>
                      )}
                    </ListItemAvatar>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      id="filled-basic"
                      label="Heading"
                      variant="standard"
                      className={classes.headingText}
                      onChange={(e) =>
                        setState({
                          ...state,
                          newAnnouncement: {
                            ...state.newAnnouncement,
                            header: e.target.value,
                          },
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="filled-basic"
                      label="Message"
                      variant="standard"
                      multiline
                      className={classes.messageText}
                      onChange={(e) =>
                        setState({
                          ...state,
                          newAnnouncement: {
                            ...state.newAnnouncement,
                            message: e.target.value,
                          },
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </ListItem>
            </React.Fragment>
          )}
          {state.data.length > 0 ? (
            state.data.map((item: any) => (
              <React.Fragment key={item.id}>
                <ListSubheader className={classes.subheader}>
                  {service.formatDate(new Date(item.createdAt))}
                </ListSubheader>

                <ListItem button>
                  <ListItemAvatar>
                    {item.admin.role == USER_ROLES.ADMIN ? (
                      <Avatar className={classes.green}>
                        <SupervisorAccountIcon />
                      </Avatar>
                    ) : (
                      <Avatar className={classes.pink}>
                        <LocalHospitalIcon />
                      </Avatar>
                    )}
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.header}
                    secondary={item.message}
                  />
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <Typography
              className={classes.text}
              variant="body2"
              align="center"
              gutterBottom
            >
              No announcements to show
            </Typography>
          )}
        </List>
      </Paper>
    </React.Fragment>
  );
}
