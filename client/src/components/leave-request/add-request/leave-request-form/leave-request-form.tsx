import React, { useState } from "react";
import { requestListStyles } from "../../request-list/request-list.style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import { currentUser, STATUS, REQUEST_TYPE } from "../../../../globals";
import { LeaveRequest, LeaveRequestService } from "../../leave-request.service";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import { addLeaveReq } from "../../../../services/data.service";

export function LeaveRequestForm(props: any) {
  const { tab } = props;
  const service = LeaveRequestService;
  const data: LeaveRequest = {
    trainee: currentUser(),
    ...{
      pno: currentUser()?.pno,
      leaveAmount: 0,
      wef: new Date(),
      leavesAvailed: 0,
      reason: "",
      address: "",
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
    await addLeaveReq({ ...state.data, type: tab, trainee: currentUser()._id });
    service.buildMaps();
    setState({ data });
    alert('Request has successfully been sent to the admins for approval, Keep checking the status!')
  };

  return (
    <div>
      <Typography variant="h5" component="h2" align="center">
        {tab === REQUEST_TYPE.CASUAL ? "CASUAL" : "OUTSTATION"} LEAVE REQUEST
        PERFORMAE STUDENT OFFICERS
      </Typography>
      <br />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              <TextField
                label="Leaves Requested"
                multiline
                value={state.data.leaveAmount}
                className={classes.itemContent}
                type="number"
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      leaveAmount: isNaN(Number(e.target.value))
                        ? 0
                        : Number(e.target.value),
                    },
                  })
                }
              />
              <TextField
                label="Leaves Availed"
                multiline
                value={state.data.leavesAvailed}
                className={classes.itemContent}
                type="number"
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      leavesAvailed: isNaN(Number(e.target.value))
                        ? 0
                        : Number(e.target.value),
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

            <ListItem>
              <TextField
                label="Address"
                multiline
                value={state.data.address}
                className={classes.itemContent}
                type="number"
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      address: e.target.value,
                    },
                  })
                }
              />
            </ListItem>
            <ListItem>
              {/* <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                label="With effective from"
                value={state.data.wef}
                className={classes.halfWidth}
                onChange={(date) => {
                  setState({
                    data: {
                      ...state.data,
                      wef: date ? new Date(date) : new Date(),
                    },
                  });
                }}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              /> */}
              <div className={classes.halfWidth}>
                With effective from &nbsp;
                <DatePicker
                  selected={state.data.wef}
                  onChange={(date) => {
                    setState({
                      data: {
                        ...state.data,
                        wef: date ? new Date(date) : new Date(),
                      },
                    });
                  }}
                />
              </div>

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

              {/* <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
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
              /> */}
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
      </MuiPickersUtilsProvider>
    </div>
  );
}
