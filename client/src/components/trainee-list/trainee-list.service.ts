import { Interface } from "readline";

class _traineeService {
  data: Trainee[] = [
    {
      name: "Hamza Nazeer",
      rank: "S/LT",
      pno: 1234,
      batch: "Mechanical Engineering Semester 1",
      status: "available",
      reason: "",
    },
    {
      name: "Syed Daniyal Kazim",
      rank: "S/LT",
      pno: 54321,
      batch: "Mechanical Engineering Semester 1",
      status: "on sick leave",
      reason: "Admitted to Shifa",
    },
  ];

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

export interface Trainee {
  name: string;
  rank: string;
  pno: any;
  batch: string;
  status: string;
  reason: string;
}

export const TraineeService = new _traineeService();
