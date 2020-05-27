import React, { useState } from "react";
import { requestListStyles } from "../../request-list/request-list.style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { getTrainee, addSickReq } from "../../../../services/data.service";
import { currentUser, STATUS, REQUEST_TYPE } from "../../../../globals";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import {
  LeaveRequest,
  LeaveRequestService,
  ShortRequest,
  SickRequest,
} from "../../leave-request.service";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
// @ts-ignore
import TimePicker from "react-time-picker";

export function SickRequestForm(props: any) {
  const { tab } = props;
  const service = LeaveRequestService;
  const data: SickRequest = {
    trainee: currentUser(),
    ...{
      pno: currentUser()?.pno,
      timeIn: "",
      timeout: "",
      punishment: false,
      reason: "",
      date: new Date(),
      type: tab,
      status: STATUS.PENDING,
    },
  };

  const [state, setState] = useState({
    data,
  });
  const classes = requestListStyles();

  const submit = async (_e: any) => {
    if (tab == REQUEST_TYPE.SICK) {
      await addSickReq({
        ...state.data,
        type: tab,
        trainee: currentUser()._id,
      });
    }
    service.buildMaps();
    setState({ data });
    alert(
      "Request has successfully been sent to the admins for approval, Keep checking the status!"
    );
  };

  return (
    <div>
      <Typography variant="h5" component="h2" align="center">
        SICK LEAVE REQUEST
      </Typography>
      <br />
      <Paper elevation={0} variant="outlined" className={classes.paper}>
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
            <ListItemText
              primary={state.data?.trainee?.rank}
              secondary={"Rank"}
            />
            <ListItemText
              primary={state.data?.trainee?.name}
              secondary={"Name "}
            />
            <ListItemText
              primary={state.data?.trainee?.pno}
              secondary={"Pno"}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={state.data?.trainee?.batch}
              secondary={"Batch "}
            />
            <ListItemText
              primary={state.data?.trainee?.division}
              secondary={"Division"}
            />
            <ListItemText
              primary={state.data?.trainee?.mobile}
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
            <p>Time in</p>
            <TimePicker
              value={state.data.timeIn}
              onChange={(time: any) =>
                setState({
                  ...state,
                  data: {
                    ...state.data,
                    timeIn: time,
                  },
                })
              }
            />
            <p>Time Out</p>
            <TimePicker
              value={state.data.timeout}
              onChange={(time: any) =>
                setState({
                  ...state,
                  data: {
                    ...state.data,
                    timeout: time,
                  },
                })
              }
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
            <div className={classes.halfWidth}>
              Date&nbsp;
              <DatePicker
                selected={state.data.date}
                onChange={(date) => {
                  setState({
                    data: {
                      ...state.data,
                      date: date ? new Date(date) : new Date(),
                    },
                  });
                }}
              />
            </div>
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
      </Paper>
    </div>
  );
}
