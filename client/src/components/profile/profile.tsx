import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { profileStyles } from "./profile.style";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import {
  getTrainee,
  Trainee,
  updateTrainee,
} from "../../services/data.service";
import { currentUser, USER_ROLES } from "../../globals";
import Avatar from "@material-ui/core/Avatar";
const useStyles = profileStyles;
export function Profile() {
  const classes = useStyles();
  const user: Trainee = getTrainee(currentUser()?.pno) || {
    pno: "",
    name: "",
    rank: "",
    password: "",
    division: "",
    batch: "",
    mobile: "",
    status: "",
    statusReason: "",
    role: USER_ROLES.TRAINEE,
  };

  const submit = () => {
    updateTrainee(state.user);
  };

  const [state, setState] = useState({
    user,
  });

  return (
    <Card className={classes.root} variant={"outlined"}>
      <Grid container spacing={3}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2} justify="center">
          <Avatar className={classes.avatar}>
            {state.user.name.split(" ")[0].charAt(0) +
              state.user.name.split(" ")[1].charAt(0)}
          </Avatar>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <TextField
              label="Rank"
              multiline
              value={state.user?.rank}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    rank: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <TextField
              label="Name"
              multiline
              value={state.user?.name}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    name: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <TextField
              label="Pno"
              multiline
              value={state.user?.pno}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    pno: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField
              label="Division"
              multiline
              value={state.user?.division}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    division: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField
              label="Batch"
              multiline
              value={state.user?.batch}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    batch: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <TextField
              label="Mobile"
              multiline
              value={state.user?.mobile}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    mobile: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} justify="center">
          <Paper className={classes.paper}>
            <TextField
              label="Password"
              multiline
              value={state.user?.password}
              className={classes.fullWidth}
              type="text"
              onChange={(e) =>
                setState({
                  user: {
                    ...state.user,
                    password: e.target.value,
                  },
                })
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={1}>
          <div className={classes.actions}>
            <Button variant="contained" color="primary" onClick={submit}>
              Save
            </Button>
          </div>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </Card>
  );
}
