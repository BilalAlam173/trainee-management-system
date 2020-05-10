import React from "react";
import MaterialTable, { Column } from "material-table";
import { TraineeService } from "./trainee-list.service";
import { USER_ROLES, currentUser } from "../../globals";
import { trainees } from "../../services/data.service";
interface Row {
  name: string;
  rank: string;
  batch: string;
  status: string;
  reason: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export function TraineeList() {
  let batch =
    window.location.pathname.split("/").length > 3 &&
    window.location.pathname.split("/")[3];
  const service = TraineeService;
  console.log(batch);
  const [state, setState] = React.useState({
    columns: service.columns,
    data: batch ? trainees.filter((x) => x.batch == batch) : trainees,
  });

  const isAllowed = () => {
    const role = currentUser()?.role;
    return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
  };

  const actions = {
    onRowAdd: (newData: any) =>
      new Promise((resolve) => {
        setTimeout(() => {
          newData.batch = batch || newData.batch;
          trainees.push(newData);
          setState((prevState) => {
            const data = [...prevState.data];
            data.push(newData);
            service.data = data as any[];
            return { ...prevState, data };
          });
          resolve();
        }, 600);
      }),
    onRowUpdate: (newData: any, oldData: any) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          if (oldData) {
            setState((prevState) => {
              const data = [...prevState.data];
              data[data.indexOf(oldData)] = newData;
              return { ...prevState, data };
            });
          }
        }, 600);
      }),
    onRowDelete: (oldData: any) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          setState((prevState) => {
            const data = [...prevState.data];
            data.splice(data.indexOf(oldData), 1);
            return { ...prevState, data };
          });
        }, 600);
      }),
  };

  return isAllowed() ? (
    <MaterialTable
      title="Trainees"
      columns={state.columns}
      data={state.data}
      editable={actions}
    />
  ) : (
    <MaterialTable title="Trainees" columns={state.columns} data={state.data} />
  );
}
