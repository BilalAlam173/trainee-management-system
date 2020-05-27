import React, { useState, useEffect } from "react";
import { eventStyles } from "./event.style";

import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Event } from "./event.service";
import {
  Trainee,
  getAllEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "../../services/data.service";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { currentUser, isSuperOfficer } from "../../globals";
import DateFnsUtils from "@date-io/date-fns";
import DatePicker from "react-datepicker";
// @ts-ignore
import TimePicker from "react-time-picker";

export function EventPage() {
  const classes = eventStyles();

  const [state, setState] = useState({
    events: [] as any[],
  });

  const getData = async () => {
    const events: any[] = await getAllEvents();
    setState({
      events,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const add = async () => {
    await addEvent({
      title: "",
      venue: "",
      date: new Date(),
      startTime: "",
      endTime: "",
      description: "",
      participants: [],
      creator: currentUser()._id,
    });
    await getData();
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Event title</TableCell>
            <TableCell align="right">Venue</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.events?.map((event) => (
            <Row
              key={event._id}
              row={event}
              onRefresh={() => {
                getData();
              }}
            />
          ))}
        </TableBody>
      </Table>
      {isSuperOfficer() ? (
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.actionBtns}
            onClick={add}
          >
            Add
          </Button>
        </div>
      ) : (
        ""
      )}
    </TableContainer>
  );
}
const isAlreadyMember = (data: any[]) => {
  if (data && data.length > 0) {
    return data.findIndex((x: any) => x?._id == currentUser()?._id || "") > -1;
  } else {
    return false;
  }
};
function Row(props: { row: Event; onRefresh: any }) {
  const { row, onRefresh } = props;
  const [open, setOpen] = React.useState(row.new);
  const classes = eventStyles();
  const initState = {
    editMode: !!row.new,
    addMode: false,
    row,
  };
  const [state, setState] = useState(initState);

  const save = async () => {
    await updateEvent({ ...state.row, new: false });
    setState({
      ...state,
      editMode: false,
    });
  };
  const participate = async () => {
    state.row.participants.push(currentUser()._id);
    await updateEvent(state.row);
    onRefresh();
    setState({
      ...state,
      editMode: false,
    });
  };

  const deleteRow = async () => {
    await deleteEvent(state.row._id);
    onRefresh();
  };

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {state.editMode ? (
            <TextField
              label="Title"
              multiline
              value={state.row.title}
              onChange={(e) =>
                setState({
                  ...state,
                  row: {
                    ...state.row,
                    title: e.target.value,
                  },
                })
              }
            />
          ) : (
            state.row.title
          )}
        </TableCell>
        <TableCell align="right">
          {state.editMode ? (
            <TextField
              label="Venue"
              multiline
              value={state.row.venue}
              onChange={(e) =>
                setState({
                  ...state,
                  row: {
                    ...state.row,
                    venue: e.target.value,
                  },
                })
              }
            />
          ) : (
            state.row.venue
          )}
        </TableCell>
        <TableCell align="right">
          {state.editMode ? (
            // <KeyboardDatePicker
            //   disableToolbar
            //   variant="inline"
            //   format="MM/dd/yyyy"
            //   margin="dense"
            //   id="date-picker-inline"
            //   label="date"
            //   value={new Date(state.row.date)}
            //   onChange={(date) =>
            //     setState({
            //       ...state,
            //       row: {
            //         ...state.row,
            //         date: date ? new Date(date) : new Date(),
            //       },
            //     })
            //   }
            //   KeyboardButtonProps={{
            //     "aria-label": "change date",
            //   }}
            // />
            <DatePicker
              selected={new Date(state.row.date)}
              onChange={(date) => {
                setState({
                  ...state,
                  row: {
                    ...state.row,
                    date: date ? new Date(date) : new Date(),
                  },
                });
              }}
            />
          ) : (
            new Date(state.row.date).toLocaleDateString()
          )}
        </TableCell>
        <TableCell align="right">
          {state.editMode ? (
            <TimePicker
              value={state.row.startTime}
              onChange={(time: any) =>
                setState({
                  ...state,
                  row: {
                    ...state.row,
                    startTime: time,
                  },
                })
              }
            />
          ) : (
            state.row.startTime
          )}
        </TableCell>
        <TableCell align="right">
          {state.editMode ? (
            <TimePicker
              value={state.row.endTime}
              onChange={(time: any) =>
                setState({
                  ...state,
                  row: {
                    ...state.row,
                    endTime: time,
                  },
                })
              }
            />
          ) : (
            state.row.endTime
          )}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <Typography variant="body1" gutterBottom component="div">
                {state.editMode ? (
                  <TextField
                    label="Description"
                    multiline
                    value={state.row.description}
                    className={classes.fullWidth}
                    onChange={(e) =>
                      setState({
                        ...state,
                        row: {
                          ...state.row,
                          description: e.target.value,
                        },
                      })
                    }
                  />
                ) : (
                  state.row.description
                )}
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                Participants
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pno</TableCell>
                    <TableCell>Rank</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Division</TableCell>
                    <TableCell align="right">Mobile</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.participants?.map((user: Trainee) => (
                    <TableRow key={user._id}>
                      <TableCell component="th" scope="row">
                        {user.pno}
                      </TableCell>
                      <TableCell>{user.rank}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell align="right">{user.division}</TableCell>
                      <TableCell align="right">{user.mobile}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {!isSuperOfficer() ? (
                <div className={classes.actions}>
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isAlreadyMember(row.participants)}
                    onClick={participate}
                  >
                    Participate
                  </Button>
                </div>
              ) : (
                <div className={classes.actions}>
                  {!state.editMode ? (
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.actionBtns}
                      disabled={isAlreadyMember(row.participants)}
                      onClick={() => {
                        setState({
                          ...state,
                          editMode: true,
                        });
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.actionBtns}
                      disabled={isAlreadyMember(row.participants)}
                      onClick={save}
                    >
                      Save
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.actionBtns}
                    disabled={isAlreadyMember(row.participants)}
                    onClick={deleteRow}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
