import React, { useState, useEffect } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {
  getSecondaryTabText,
  STATUS,
  isAdmin,
  isTrainee,
} from "../../../../globals";
import { requestListStyles } from "../request-list.style";
import { LeaveRequest } from "../../leave-request.service";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import BlockIcon from "@material-ui/icons/Block";
import { getTrainee } from "../../../../services/data.service";

export function LeaveRequestDoc(props: any) {
  const { data } = props;

  const [state, setState] = useState({
    data: { ...data },
  });

  useEffect(() => {
    setState({ data: { ...props.data } });
  }, [props]);

  const classes = requestListStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          <b>{state.data?.trainee?.name}</b>
          <span className={classes.statusBar}>
            {data.status == STATUS.APPROVED && <ThumbUpIcon color="primary" />}
            {data.status == STATUS.DECLINED && <BlockIcon color="error" />}
          </span>
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography className={classes.itemContent}>
          <List className={classes.root}>
            <Divider component="li" />
            <li>
              <Typography
                className={classes.dividerFullWidth}
                color="primary"
                display="block"
                variant="caption"
              >
                Personal Details
              </Typography>
            </li>
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
            <Divider component="li" />
            <li>
              <Typography
                className={classes.dividerFullWidth}
                color="primary"
                display="block"
                variant="caption"
              >
                Request Details
              </Typography>
            </li>
            <ListItem>
              <ListItemText
                primary={state.data.leaveAmount}
                secondary={"Leaves Requested"}
              />
              <ListItemText
                primary={new Date(state.data.wef).toLocaleDateString()}
                secondary={"With effective from"}
              />
              <ListItemText primary={state.data.reason} secondary={"Reason"} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={state.data.address}
                secondary={"Address"}
              />
              <ListItemText
                primary={getSecondaryTabText(state.data.status)}
                secondary={"Status"}
              />
            </ListItem>
            <Divider component="li" />
            <li>
              <Typography
                className={classes.dividerFullWidth}
                color="primary"
                display="block"
                variant="caption"
              >
                Remarks
              </Typography>
            </li>
            <ListItem>
              <TextField
                label="Course Officer's Remarks"
                multiline
                value={state.data.courseOfficerRemarks}
                className={classes.itemContent}
                disabled={isTrainee()}
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      courseOfficerRemarks: e.target.value,
                    },
                  })
                }
              />
              <TextField
                label="JOTO Remarks"
                multiline
                value={state.data.jotoRemarks}
                className={classes.itemContent}
                disabled={isTrainee()}
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      jotoRemarks: e.target.value,
                    },
                  })
                }
              />
            </ListItem>
            <ListItem>
              <TextField
                label="Dean's Remarks"
                multiline
                value={state.data.deanRemarks}
                className={classes.itemContent}
                disabled={isTrainee()}
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      deanRemarks: e.target.value,
                    },
                  })
                }
              />
              <TextField
                label="CaptainTraining Remarks"
                value={state.data.captainRemarks}
                multiline
                className={classes.itemContent}
                disabled={isTrainee()}
                onChange={(e) =>
                  setState({
                    data: {
                      ...state.data,
                      captainRemarks: e.target.value,
                    },
                  })
                }
              />
            </ListItem>
          </List>
          {isAdmin() ? (
            <div className={classes.actions}>
              <Button
                variant="contained"
                className={classes.actionBtns}
                color="primary"
                disabled={state.data.status !== STATUS.PENDING}
                onClick={() =>
                  props.onChange({ ...state.data, status: STATUS.APPROVED })
                }
              >
                Approve
              </Button>
              <Button
                variant="contained"
                className={classes.actionBtns}
                color="default"
                disabled={state.data.status !== STATUS.PENDING}
                onClick={() => {
                  props.onChange(state.data);
                }}
              >
                save
              </Button>
              <Button
                variant="contained"
                className={classes.actionBtns}
                color="secondary"
                disabled={state.data.status !== STATUS.PENDING}
                onClick={() =>
                  props.onChange({ ...state.data, status: STATUS.DECLINED })
                }
              >
                Decline
              </Button>
            </div>
          ) : (
            ""
          )}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
