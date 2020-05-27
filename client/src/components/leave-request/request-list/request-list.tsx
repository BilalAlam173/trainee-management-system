import React, { useState, useEffect } from "react";
import {
  REQUEST_TYPE,
  getSecondaryTabText,
  getPrimaryTabText,
  isAdmin,
  currentUser,
  STATUS,
  isTrainee,
} from "../../../globals";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { requestListStyles } from "./request-list.style";
import Button from "@material-ui/core/Button";
import {
  LeaveRequestService,
  ShortRequest,
  SickRequest,
} from "../leave-request.service";
import {
  updateLeaveReq,
  updateShortReq,
  updateSickReq,
} from "../../../services/data.service";
import { LeaveRequest } from "../leave-request.service";
import { LeaveRequestDoc } from "./leave-request-doc/leave-request-doc";
import { ShortRequestDoc } from "./short-request-doc/short-request-doc";
import { SickRequestDoc } from "./sick-request-doc/sick-request-doc";
import { ShortRequestForm } from "../add-request/short-request-form/short-request-form";
import { SickRequestForm } from "../add-request/sick-request-form/sick-request-form";
import { LeaveRequestForm } from "../add-request/leave-request-form/leave-request-form";

export function LeaveRequestList(props: any) {
  const { secondaryTab, tab } = props;
  const classes = requestListStyles();
  const service = LeaveRequestService;

  const getData = async () => {
    await service.buildMaps();
    if (isAdmin()) {
      setState({
        data: service.requestToAdminMap[tab][secondaryTab] || [],
      });
    } else {
      try {
        setState({
          data:
            service.requestToStatusMap[tab][secondaryTab].filter(
              (x: any) => x.trainee._id == currentUser()?._id
            ) || [],
        });
      } catch (e) {
        return [];
      }
    }
  };

  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getData();
  }, [props]);

  const setData = async (obj: any) => {
    if (isAdmin()) {
      if (tab === REQUEST_TYPE.OUTSTATION || tab === REQUEST_TYPE.CASUAL) {
        await updateLeaveReq(obj);
      } else if (tab === REQUEST_TYPE.SHORT || tab === REQUEST_TYPE.NIGHT) {
        await updateShortReq(obj);
      } else {
        await updateSickReq(obj);
      }
      service.buildMaps();
      getData();
    }
  };

  const changeHandler = (obj: any) => {
    setData(obj);
    alert("Form updated with latest changes!");
  };

  return (
    <div>
      <h3>
        {getPrimaryTabText(tab)} for {getSecondaryTabText(secondaryTab)}
      </h3>
      <div>
        {state.data.map((req: LeaveRequest) => {
          switch (tab) {
            case REQUEST_TYPE.OUTSTATION:
            case REQUEST_TYPE.CASUAL:
              return secondaryTab == STATUS.ADD && isTrainee() ? (
                <LeaveRequestForm />
              ) : (
                <LeaveRequestDoc
                  data={req}
                  onChange={(obj: any) => changeHandler(obj)}
                  key={req?.trainee?._id}
                />
              );
            case REQUEST_TYPE.NIGHT:
            case REQUEST_TYPE.SHORT:
              return secondaryTab == STATUS.ADD && isTrainee() ? (
                <ShortRequestForm />
              ) : (
                <ShortRequestDoc
                  data={req}
                  onChange={(obj: any) => changeHandler(obj)}
                  key={req?.trainee?._id}
                />
              );
            case REQUEST_TYPE.SICK:
              return secondaryTab == STATUS.ADD && isTrainee() ? (
                <SickRequestForm />
              ) : (
                <SickRequestDoc
                  data={req}
                  onChange={(obj: any) => changeHandler(obj)}
                  key={req?.trainee?._id}
                />
              );
            default:
              return (
                <LeaveRequestDoc
                  data={req}
                  onChange={(obj: any) => changeHandler(obj)}
                />
              );
          }
        })}
        {state.data.length < 1 && <p>No Leave Requests to show</p>}
      </div>
    </div>
  );
}
