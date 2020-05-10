import { USER_ROLES } from "../globals";

export const trainees: Trainee[] = [
  {
    pno: "0001",
    rank: "S/lt",
    name: "Daniyal Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0002",
    rank: "S/lt",
    name: "hamza Kazim",
    password: "test123",
    batch: "MIS-1",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0003",
    rank: "S/lt",
    name: "Danish Kazim",
    password: "test123",
    batch: "ME-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0004",
    rank: "S/lt",
    name: "Mushtaq Kazim",
    password: "test123",
    batch: "ME-3",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0005",
    rank: "S/lt",
    name: "Karim Kazim",
    password: "test123",
    batch: "WE-1",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0006",
    rank: "S/lt",
    name: "Daniyal Khan",
    password: "test123",
    batch: "WE-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0007",
    rank: "S/lt",
    name: "Atif Khan",
    password: "test123",
    batch: "WE-3",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0008",
    rank: "S/lt",
    name: "Mansoor Kazim",
    password: "test123",
    batch: "WE-4",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0009",
    rank: "S/lt",
    name: "Asif Khan",
    password: "test123",
    batch: "ME-3",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0010",
    rank: "S/lt",
    name: "Dawood Ahmed",
    password: "test123",
    batch: "ME-4",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0011",
    rank: "S/lt",
    name: "Ahmed Hassan",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0012",
    rank: "S/lt",
    name: "Mehmood Khan",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0013",
    rank: "S/lt",
    name: "saqib Javed",
    password: "test123",
    batch: "ME-1",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0014",
    rank: "S/lt",
    name: "Wasim Khan",
    password: "test123",
    batch: "WE-4",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0015",
    rank: "S/lt",
    name: "Hamza Nazir Khan",
    password: "test123",
    batch: "WE-3",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0016",
    rank: "S/lt",
    name: "Ameen Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0017",
    rank: "S/lt",
    name: "Shaan Kazim",
    password: "test123",
    batch: "WE-1",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0018",
    rank: "S/lt",
    name: "ali Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0019",
    rank: "S/lt",
    name: "wamiq Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0020",
    rank: "S/lt",
    name: "Asghar Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0021",
    rank: "S/lt",
    name: "Anas Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0022",
    rank: "S/lt",
    name: "Fahad Kazim",
    password: "test123",
    batch: "ME-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0023",
    rank: "S/lt",
    name: "Faisal Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
  {
    pno: "0024",
    rank: "S/lt",
    name: "Moosa Kazim",
    password: "test123",
    batch: "MIS-2",
    division: "Alpha",
    mobile: "034512356478",
  },
];
export const getTrainee = (pno: any): Trainee | null => {
  return trainees.find((x) => x.pno == pno) || null;
};

export const updateTrainee = (user: Trainee) => {
  const idx = trainees.findIndex((x) => x.pno == user.pno);
  trainees[idx] = user;
  localStorage.setItem("user", JSON.stringify(user));
};
export class Trainee {
  pno: string = "";
  password: string = "";
  rank: string = "";
  name: string = "";
  division: string = "";
  batch: string = "";
  mobile: string = "";
  status?: string = "";
  statusReason?: string = "";
  role?: USER_ROLES;
}
