import React from "react";
import { STATUS, REQUEST_TYPE } from "../../../globals";

export function AddRequest(props: any) {
  const { tab } = props;

  const tabText = (() => {
    switch (tab) {
      case REQUEST_TYPE.OUTSTATION:
        return "Outstation Leave Requests";
      case REQUEST_TYPE.CASUAL:
        return "Casual Leave Requests";
      case REQUEST_TYPE.SICK:
        return "Sick Reports";
      case REQUEST_TYPE.SHORT:
        return "Short Leave Requests";
      case REQUEST_TYPE.NIGHT:
        return "Night Off Leave Requests";
    }
  })();

  return <p>Create request for {tabText}</p>;
}
