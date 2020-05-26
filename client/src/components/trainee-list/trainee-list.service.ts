class _traineeService {
  columns = [
    { title: "PNo", field: "pno" },
    { title: "Name", field: "name" },
    { title: "Rank", field: "rank" },
    { title: "Batch", field: "batch" },
    { title: "status", field: "status" },
    { title: "reason", field: "statusReason" },
  ];
}

export const TraineeService = new _traineeService();
