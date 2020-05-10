import { trainees, Trainee } from "../../services/data.service";

class _traineeService {
  data: any[] = trainees;

  columns = [
    { title: "PNo", field: "pno" },
    { title: "Name", field: "name" },
    { title: "Rank", field: "rank" },
    { title: "Batch", field: "batch" },
    { title: "status", field: "status" },
    { title: "reason", field: "reason" },
  ];

  getTrainee(pno: any) {
    return this.data.find((x) => pno == x.pno);
  }

  addTrainee(trainee: Trainee) {
    this.data.push(trainee);
  }
}

export const TraineeService = new _traineeService();
