import React from "react";
import MaterialTable, { Column } from "material-table";
import { TraineeService, Trainee } from "./trainee-list.service";
import { USER_ROLES } from "../../globals";

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
  const service = TraineeService;
  const [state, setState] = React.useState<TableState>({
    columns: service.columns,
    data: service.data,
  });

  const isAllowed = () => {
    const role = Number(localStorage.getItem("role"));
    return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
  };

  const actions = {
    onRowAdd: (newData: any) =>
      new Promise((resolve) => {
        setTimeout(() => {
          setState((prevState) => {
            const data = [...prevState.data];
            data.push(newData);
            service.data = data as Trainee[];
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
