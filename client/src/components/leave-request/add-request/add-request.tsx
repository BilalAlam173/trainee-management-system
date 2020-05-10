import React from "react";
import { STATUS, REQUEST_TYPE } from "../../../globals";
import { LeaveRequestForm } from "./leave-request-form/leave-request-form";
import { SickRequestForm } from "./sick-request-form/sick-request-form";
import { ShortRequestForm } from "./short-request-form/short-request-form";

export function AddRequest(props: any) {
  const { tab } = props;

  const getForm = (() => {
    switch (tab) {
      case REQUEST_TYPE.OUTSTATION:
      case REQUEST_TYPE.CASUAL:
        return <LeaveRequestForm tab={tab} />;
      case REQUEST_TYPE.SICK:
        return <SickRequestForm tab={tab} />;
      case REQUEST_TYPE.SHORT:
      case REQUEST_TYPE.NIGHT:
        return <ShortRequestForm tab={tab} />;
      default:
        return <LeaveRequestForm tab={tab} />;
    }
  })();

  return getForm;
}
