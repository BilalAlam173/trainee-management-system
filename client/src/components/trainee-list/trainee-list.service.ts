class _traineeService {
  columns = [
    { title: "PNo", field: "pno" },
    { title: "Name", field: "name" },
    { title: "Rank", field: "rank" },
    { title: "Batch", field: "batch" },
    { title: "Status", field: "status" },
    { title: "Remarks", field: "statusReason" },
  ];
}

export const TraineeService = new _traineeService();
