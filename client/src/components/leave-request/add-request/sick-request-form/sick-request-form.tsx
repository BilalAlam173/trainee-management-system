import React, { useState } from "react";
import { requestListStyles } from "../../request-list/request-list.style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { getTrainee } from "../../../../services/data.service";
import { currentUser, STATUS, REQUEST_TYPE } from "../../../../globals";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {
  LeaveRequest,
  LeaveRequestService,
  ShortRequest,
  SickRequest,
} from "../../leave-request.service";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";

export function SickRequestForm(props: any) {
  const { tab } = props;
  const service = LeaveRequestService;
  const data: SickRequest = {
    ...currentUser(),
    ...{
      pno: currentUser()?.pno,
      timeIn: new Date(),
      timeout: new Date(),
      punishment: false,
      reason: "",
      date: new Date(),
      status: STATUS.PENDING,
    },
  };

  const [state, setState] = useState({
    data,
  });
  const classes = requestListStyles();

  const submit = (_e: any) => {
    if (tab == REQUEST_TYPE.SHORT) {
      service.sickRequests.push(state.data);
    }
    service.buildMaps();
    setState({ data });
  };

  return (
    <div>
      <Typography variant="h5" component="h2" align="center">
        SICK LEAVE REQUEST
      </Typography>
      <br />
      <Paper elevation={0} variant="outlined" className={classes.paper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <List className={classes.root}>
            <li>
              <Typography
                className={classes.dividerFullWidth}
                display="block"
                variant="caption"
                align="center"
              >
                Personal Details
              </Typography>
            </li>
            <Divider component="li" />

            <ListItem>
              <ListItemText primary={state.data.rank} secondary={"Rank"} />
              <ListItemText primary={state.data.name} secondary={"Name "} />
              <ListItemText primary={state.data.pno} secondary={"Pno"} />
            </ListItem>
            <ListItem>
              <ListItemText primary={state.data.batch} secondary={"Batch "} />
              <ListItemText
                primary={state.data.division}
                secondary={"Division"}
              />
              <ListItemText
                primary={state.data.mobile}
                secondary={"Mobile No"}
              />
            </ListItem>

            <li>
              <Typography
                className={classes.dividerFullWidth}
                display="block"
                variant="caption"
                align="center"
              >
                Request Details
              </Typography>
            </li>
            <Divider component="li" />
            <ListItem>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time In"
                value={state.data.timeIn}
                className={classes.halfWidth}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                onChange={(date) => {
                  setState({
                    data: {
                      ...state.data,
                      timeIn: date ? new Date(date) : new Date(),
                    },
                  });
                }}
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time Out"
                value={state.data.timeout}
                className={classes.halfWidth}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
                onChange={(date) => {
                  setState({
                    data: {
                      ...state.data,
                      timeout: date ? new Date(date) : new Date(),
                    },
                  });
                }}
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Reason"
                multiline
                value={state.data.reason}
                className={classes.itemContent}
                type="number"
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      reason: e.target.value,
                    },
                  })
                }
              />
            </ListItem>
            <ListItem></ListItem>
            <ListItem>
              <FormControlLabel
                className={classes.halfWidth}
                control={
                  <Checkbox
                    checked={state.data.punishment}
                    onChange={(e) => {
                      setState({
                        data: {
                          ...state.data,
                          punishment: e.target.checked,
                        },
                      });
                    }}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Punishment"
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="dense"
                id="date-picker-inline"
                label="Date"
                className={classes.halfWidth}
                value={state.data.date}
                onChange={(date) => {
                  setState({
                    data: {
                      ...state.data,
                      date: date ? new Date(date) : new Date(),
                    },
                  });
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </ListItem>
            <Divider component="li" />
          </List>
          <div className={classes.actions}>
            <Button
              variant="contained"
              className={classes.actionBtns}
              color="primary"
              disabled={state.data.status !== STATUS.PENDING}
              onClick={submit}
            >
              Submit
            </Button>
          </div>
        </MuiPickersUtilsProvider>
      </Paper>
    </div>
  );
}
