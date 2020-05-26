import React, { useEffect } from "react";
import MaterialTable, { Column } from "material-table";
import { TraineeService } from "./trainee-list.service";
import { USER_ROLES, currentUser } from "../../globals";
import {
  getAllTrainees,
  getTrainee,
  addTrainee,
  updateTrainee,
  deleteTrainee,
} from "../../services/data.service";
interface Row {
  name: string;
  rank: string;
  batch: string;
  status: string;
  statusReason: string;
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
  const [state, setState] = React.useState({
    columns: service.columns,
    data: [] as any[],
  });
  const getData = async () => {
    const trainees = await getAllTrainees();
    setState({
      columns: service.columns,
      data: batch ? trainees.filter((x) => x.batch == batch) : trainees,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const isAllowed = () => {
    const role = currentUser()?.role;
    return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
  };

  const actions = {
    onRowAdd: (newData: any) =>
      new Promise((resolve) => {
        newData.batch = batch || newData.batch;
        addTrainee(newData).then(() => {
          setState((prevState) => {
            const data = [...prevState.data];
            return { ...prevState, data };
          });
          resolve();
        });
      }),
    onRowUpdate: (newData: any, oldData: any) =>
      updateTrainee(newData).then(() => {
        getData();
      }),
    onRowDelete: (oldData: any) =>
      deleteTrainee(oldData._id).then(() => getData()),
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
