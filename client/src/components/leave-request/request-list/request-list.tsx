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

  const getData = (): any[] => {
    if (isAdmin()) {
      return service.requestToAdminMap[tab][secondaryTab] || [];
    } else {
      return (
        service.requestToStatusMap[tab][secondaryTab].filter(
          (x: any) => x.pno == currentUser()?.pno
        ) || []
      );
    }
  };

  const [state, setState] = useState({
    data: getData(),
  });

  const setData = (obj: any) => {
    if (isAdmin()) {
      const idx = service.requestToAdminMap[tab][secondaryTab].findIndex(
        (x: any) => x.pno == obj.pno
      );
      service.requestToAdminMap[tab][secondaryTab][idx] = obj;
      service.update(service.requestToAdminMap[tab][secondaryTab], tab);
      service.buildMaps();
      setState({ data: getData() });
    }
  };

  useEffect(() => {
    setState({ data: getData() });
  }, [props]);

  const changeHandler = (obj: any) => {
    setData(obj);
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
                  key={req.pno}
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
                />
              );
            case REQUEST_TYPE.SICK:
              return secondaryTab == STATUS.ADD && isTrainee() ? (
                <SickRequestForm />
              ) : (
                <SickRequestDoc
                  data={req}
                  onChange={(obj: any) => changeHandler(obj)}
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
        {getData().length < 1 && <p>No Leave Requests to show</p>}
      </div>
    </div>
  );
}
