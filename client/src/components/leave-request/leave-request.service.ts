import { STATUS, REQUEST_TYPE } from "../../globals";
import { stat } from "fs";

class _leaveRequestService {
  tabs = [
    {
      title: "Outstation",
      type: REQUEST_TYPE.OUTSTATION,
    },
    {
      title: "Casual",
      type: REQUEST_TYPE.CASUAL,
    },
    {
      title: "Sick Report",
      type: REQUEST_TYPE.SICK,
    },
    {
      title: "Short Leave",
      type: REQUEST_TYPE.SHORT,
    },
    {
      title: "Night Off",
      type: REQUEST_TYPE.NIGHT,
    },
  ];
  outstationRequests: LeaveRequest[] = [
    {
      pno: "6850",
      rank: "S/lt",
      name: "Daniyal Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "",
      jotoRemarks: "",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6851",
      rank: "S/lt",
      name: "hamza Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6852",
      rank: "S/lt",
      name: "Danish Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6853",
      rank: "S/lt",
      name: "Mushtaq Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6854",
      rank: "S/lt",
      name: "Karim Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "Approved",
      status: STATUS.PENDING,
    },
    {
      pno: "6855",
      rank: "S/lt",
      name: "Shabbir Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "Approved",
      status: STATUS.APPROVED,
    },
    {
      pno: "6856",
      rank: "S/lt",
      name: "Sabih Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Not Approved, under punishment",
      captainRemarks: "Approved",
      status: STATUS.DECLINED,
    },
  ];
  casualRequests: LeaveRequest[] = [
    {
      pno: "6850",
      rank: "S/lt",
      name: "Daniyal Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "",
      jotoRemarks: "",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6851",
      rank: "S/lt",
      name: "hamza Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6852",
      rank: "S/lt",
      name: "Danish Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6853",
      rank: "S/lt",
      name: "Mushtaq Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "6854",
      rank: "S/lt",
      name: "Karim Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "Approved",
      status: STATUS.PENDING,
    },
    {
      pno: "6855",
      rank: "S/lt",
      name: "Shabbir Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "Approved",
      status: STATUS.APPROVED,
    },
    {
      pno: "6856",
      rank: "S/lt",
      name: "Sabih Kazim",
      batch: "MIS-2",
      division: "Alpha",
      mobile: "034512356478",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Not Approved, under punishment",
      captainRemarks: "Approved",
      status: STATUS.DECLINED,
    },
  ];
  sickRequests: SickRequest[] = [];
  shortLeaveRequests: ShortRequest[] = [];
  nightOffRequests: ShortRequest[] = [];
}

export interface LeaveRequest {
  pno: any;
  rank: string;
  name: string;
  batch: string;
  division: string;
  mobile: string;
  leaveAmount: number;
  wef: Date;
  leavesAvailed: number;
  reason: string;
  address: string;
  date: Date;
  courseOfficerRemarks: string;
  jotoRemarks: string;
  deanRemarks: string;
  captainRemarks: string;
  status: STATUS;
}

export interface ShortRequest {
  pno: any;
  rank: string;
  name: string;
  batch: string;
  division: string;
  mobile: string;
  startTime: string;
  endTime: string;
  reason: string;
  date: Date;
  address: string;
  jotoRemarks: string;
  aJotoRemarks: string;
  courseOfficerRemarks: string;
}

export interface SickRequest {
  pno: any;
  rank: string;
  name: string;
  batch: string;
  division: string;
  mobile: string;
  punishment: boolean;
  reason: string;
  smoRemarks: string;
  timeIn: string;
  timeout: string;
}

export const LeaveRequestService = new _leaveRequestService();
