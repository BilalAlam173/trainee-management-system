import React from "react";
import {
  STATUS,
  REQUEST_TYPE,
  USER_ROLES,
  ADMIN_TYPES,
  getSecondaryTabText,
  getPrimaryTabText,
  isSuperAdmin,
} from "../../../globals";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { requestListStyles } from "./request-list.style";
import {
  LeaveRequestService,
  ShortRequest,
  SickRequest,
} from "../leave-request.service";
import { LeaveRequest } from "../leave-request.service";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export function LeaveRequestList(props: any) {
  const { status, tab } = props;
  const classes = requestListStyles();
  const service = LeaveRequestService;

  const getData = (): any[] => {
    let filterFN: (item: any) => boolean = (x) => x;
    if (isSuperAdmin()) {
      switch (status) {
        case ADMIN_TYPES.COURSE_OFFICER:
          filterFN = (item) =>
            !(
              item.courseOfficerRemarks ||
              item.jotoRemarks ||
              item.deanRemarks ||
              item.captainRemarks
            );
          break;
        case ADMIN_TYPES.JOTO:
          filterFN = (item) =>
            item.courseOfficerRemarks &&
            !(item.jotoRemarks || item.deanRemarks || item.captainRemarks);
          break;
        case ADMIN_TYPES.DEAN:
          filterFN = (item) =>
            item.courseOfficerRemarks &&
            item.jotoRemarks &&
            !(item.deanRemarks || item.captainRemarks);
          break;
        case ADMIN_TYPES.CAPTAIN_TRAINING:
          filterFN = (item: any) =>
            item.courseOfficerRemarks &&
            item.jotoRemarks &&
            item.deanRemarks &&
            !item.captainRemarks;
          break;
        case ADMIN_TYPES.DPTY_COMMANDANT:
          filterFN = (item) =>
            item.courseOfficerRemarks &&
            item.jotoRemarks &&
            item.deanRemarks &&
            item.captainRemarks;
          break;
      }
    } else {
      filterFN = (item) => item.status === status;
    }
    switch (tab) {
      case REQUEST_TYPE.OUTSTATION:
        return service.outstationRequests.filter(filterFN);
      case REQUEST_TYPE.CASUAL:
        return service.casualRequests.filter(filterFN);
      case REQUEST_TYPE.SICK:
        return service.sickRequests.filter(filterFN);
      case REQUEST_TYPE.SHORT:
        return service.shortLeaveRequests.filter(filterFN);
      case REQUEST_TYPE.NIGHT:
        return service.nightOffRequests.filter(filterFN);
      default:
        return service.outstationRequests;
    }
  };

  return (
    <div>
      <h3>
        {getPrimaryTabText(tab)} for {getSecondaryTabText(status)}
      </h3>
      <div>
        {getData().map((req: LeaveRequest) => {
          return (
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>{req.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.itemContent}>
                  <List className={classes.root}>
                    <Divider component="li" />
                    <li>
                      <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                      >
                        Personal Details
                      </Typography>
                    </li>
                    <ListItem>
                      <ListItemText primary={req.rank} secondary={"Rank"} />
                      <ListItemText primary={req.name} secondary={"Name "} />
                      <ListItemText primary={req.pno} secondary={"Pno"} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={req.batch} secondary={"Batch "} />
                      <ListItemText
                        primary={req.division}
                        secondary={"Division"}
                      />
                      <ListItemText
                        primary={req.mobile}
                        secondary={"Mobile No"}
                      />
                    </ListItem>
                    <Divider component="li" />
                    <li>
                      <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
                        display="block"
                        variant="caption"
                      >
                        Request Details
                      </Typography>
                    </li>
                    <ListItem>
                      <ListItemText
                        primary={req.leaveAmount}
                        secondary={"Leaves Requested"}
                      />
                      <ListItemText
                        primary={req.wef.toLocaleDateString()}
                        secondary={"With effective from"}
                      />
                      <ListItemText primary={req.reason} secondary={"Reason"} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={req.address}
                        secondary={"Address"}
                      />
                      <ListItemText
                        primary={getSecondaryTabText(req.status)}
                        secondary={"Status"}
                      />
                    </ListItem>
                    <Divider component="li" />
                    <li>
                      <Typography
                        className={classes.dividerFullWidth}
                        color="textSecondary"
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
                        value={req.courseOfficerRemarks}
                        className={classes.itemContent}
                      />
                      <TextField
                        label="JOTO Remarks"
                        multiline
                        value={req.jotoRemarks}
                        className={classes.itemContent}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Dean's Remarks"
                        multiline
                        value={req.deanRemarks}
                        className={classes.itemContent}
                      />
                      <TextField
                        label="CaptainTraining Remarks"
                        value={req.captainRemarks}
                        multiline
                        className={classes.itemContent}
                      />
                    </ListItem>
                  </List>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    </div>
  );
}
