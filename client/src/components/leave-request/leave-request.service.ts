import { STATUS, REQUEST_TYPE, ADMIN_TYPES } from "../../globals";
import { stat } from "fs";
import { LeaveRequest } from "./leave-request";

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
      pno: "0001",
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
      pno: "0002",
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
      pno: "0003",
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
      pno: "0004",
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
      pno: "0005",
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
      pno: "0006",
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
      pno: "0007",
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
      pno: "0008",
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
      pno: "0009",
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
      pno: "0010",
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
      pno: "0011",
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
      pno: "0012",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Not Approved",
      deanRemarks: "Approved",
      captainRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "0013",
      leaveAmount: 7,
      wef: new Date(),
      leavesAvailed: 3,
      reason: "To perform Umrah",
      address: "Suadia Arab, Ceasar's Palace",
      date: new Date(),
      courseOfficerRemarks: "Approved",
      jotoRemarks: "Approved",
      deanRemarks: "Approved",
      captainRemarks: "Not Approved",
      status: STATUS.APPROVED,
    },
    {
      pno: "0014",
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
  sickRequests: SickRequest[] = [
    {
      pno: "0015",
      punishment: false,
      reason: "Pain in intestine",
      smoRemarks: "",
      timeIn: new Date(),
      timeout: new Date(),
      date: new Date(),
      status: STATUS.PENDING,
    },
    {
      pno: "0016",
      punishment: false,
      reason: "",
      smoRemarks: "",
      timeIn: new Date(),
      timeout: new Date(),
      date: new Date(),
      status: STATUS.PENDING,
    },
    {
      pno: "0017",
      punishment: false,
      reason: "",
      smoRemarks: "",
      timeIn: new Date(),
      timeout: new Date(),
      date: new Date(),
      status: STATUS.PENDING,
    },
    {
      pno: "0018",
      punishment: true,
      reason: "",
      smoRemarks: "",
      timeIn: new Date(),
      timeout: new Date(),
      date: new Date(),
      status: STATUS.PENDING,
    },
  ];
  shortLeaveRequests: ShortRequest[] = [
    {
      pno: "0019",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "",
      courseOfficerRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "0020",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "Approved",
      status: STATUS.PENDING,
      courseOfficerRemarks: "",
    },
    {
      pno: "0021",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "Approved",
      courseOfficerRemarks: "Approved",
      status: STATUS.PENDING,
    },
  ];
  nightOffRequests: ShortRequest[] = [
    {
      pno: "0022",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "",
      courseOfficerRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "0023",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "Approved",
      courseOfficerRemarks: "",
      status: STATUS.PENDING,
    },
    {
      pno: "0024",
      startTime: new Date(),
      endTime: new Date(),
      reason: "Home visit",
      date: new Date(),
      address: "R-34, Block-15",
      jotoRemarks: "",
      aJotoRemarks: "Approved",
      courseOfficerRemarks: "Approved",
      status: STATUS.PENDING,
    },
  ];

  buildFullLeaveMap = (data: LeaveRequest[]) => {
    const map: LeaveRequest[][] = [];
    map[ADMIN_TYPES.COURSE_OFFICER] = data.filter(
      (item) =>
        !(
          item.courseOfficerRemarks ||
          item.jotoRemarks ||
          item.deanRemarks ||
          item.captainRemarks
        )
    );
    map[ADMIN_TYPES.JOTO] = data.filter(
      (item) =>
        item.courseOfficerRemarks &&
        !(item.jotoRemarks || item.deanRemarks || item.captainRemarks)
    );
    map[ADMIN_TYPES.DEAN] = data.filter(
      (item) =>
        item.courseOfficerRemarks &&
        item.jotoRemarks &&
        !(item.deanRemarks || item.captainRemarks)
    );
    map[ADMIN_TYPES.CAPTAIN_TRAINING] = data.filter(
      (item) =>
        item.courseOfficerRemarks &&
        item.jotoRemarks &&
        item.deanRemarks &&
        !item.captainRemarks
    );
    map[ADMIN_TYPES.DPTY_COMMANDANT] = data.filter(
      (item) =>
        item.courseOfficerRemarks &&
        item.jotoRemarks &&
        item.deanRemarks &&
        item.captainRemarks
    );
    return map;
  };
  buildShortLeaveMap = (data: ShortRequest[]) => {
    const map: ShortRequest[][] = [];
    map[ADMIN_TYPES.AJOTO] = data.filter(
      (item) =>
        !(item.courseOfficerRemarks || item.jotoRemarks || item.aJotoRemarks)
    );
    map[ADMIN_TYPES.COURSE_OFFICER] = data.filter(
      (item) =>
        item.aJotoRemarks && !(item.courseOfficerRemarks || item.jotoRemarks)
    );
    map[ADMIN_TYPES.JOTO] = data.filter(
      (item) =>
        item.aJotoRemarks && item.courseOfficerRemarks && !item.jotoRemarks
    );
    return map;
  };

  buildSickLeaveMap = (data: SickRequest[]) => {
    const map: SickRequest[][] = [];
    map[ADMIN_TYPES.MEDICAL] = data;
    return map;
  };

  requestToAdminMap: any[][] = [];
  requestToStatusMap: any[][] = [];

  buildMaps = () => {
    /** Outstation requests */
    this.requestToAdminMap[REQUEST_TYPE.OUTSTATION] = this.buildFullLeaveMap(
      this.outstationRequests
    );
    this.requestToStatusMap[REQUEST_TYPE.OUTSTATION] = this.buildStatusMap(
      this.outstationRequests
    );

    /** Casual requests */
    this.requestToAdminMap[REQUEST_TYPE.CASUAL] = this.buildFullLeaveMap(
      this.casualRequests
    );
    this.requestToStatusMap[REQUEST_TYPE.CASUAL] = this.buildStatusMap(
      this.casualRequests
    );

    /** Short requests */
    this.requestToAdminMap[REQUEST_TYPE.SHORT] = this.buildShortLeaveMap(
      this.shortLeaveRequests
    );
    this.requestToStatusMap[REQUEST_TYPE.SHORT] = this.buildStatusMap(
      this.shortLeaveRequests
    );

    /** Night Off requests */
    this.requestToAdminMap[REQUEST_TYPE.NIGHT] = this.buildShortLeaveMap(
      this.nightOffRequests
    );
    this.requestToStatusMap[REQUEST_TYPE.NIGHT] = this.buildStatusMap(
      this.nightOffRequests
    );

    /**Sick requests */
    this.requestToAdminMap[REQUEST_TYPE.SICK] = this.buildSickLeaveMap(
      this.sickRequests
    );
    this.requestToStatusMap[REQUEST_TYPE.SICK] = this.buildStatusMap(
      this.sickRequests
    );
  };

  buildStatusMap = (data: any[]): any[][] => {
    const map: any[][] = [];
    map[STATUS.APPROVED] = data.filter((x) => x.status == STATUS.APPROVED);
    map[STATUS.PENDING] = data.filter((x) => x.status == STATUS.PENDING);
    map[STATUS.DECLINED] = data.filter((x) => x.status == STATUS.DECLINED);
    map[3] = data;
    return map;
  };

  update(data: any[], tab: REQUEST_TYPE) {
    switch (tab) {
      case REQUEST_TYPE.OUTSTATION:
        this.outstationRequests = data;
      case REQUEST_TYPE.CASUAL:
        this.casualRequests = data;
      case REQUEST_TYPE.SICK:
        this.sickRequests = data;
      case REQUEST_TYPE.SHORT:
        this.shortLeaveRequests = data;
      case REQUEST_TYPE.NIGHT:
        this.nightOffRequests = data;
    }
    this.buildMaps();
  }

  constructor() {
    this.buildMaps();
  }
}

export interface LeaveRequest {
  pno: any;
  rank?: string;
  name?: string;
  batch?: string;
  division?: string;
  mobile?: string;
  leaveAmount: number;
  wef: Date;
  leavesAvailed: number;
  reason: string;
  address: string;
  date: Date;
  courseOfficerRemarks?: string;
  jotoRemarks?: string;
  deanRemarks?: string;
  captainRemarks?: string;
  status: STATUS;
}

export interface ShortRequest {
  pno: any;
  rank?: string;
  name?: string;
  batch?: string;
  division?: string;
  mobile?: string;
  startTime: Date;
  endTime: Date;
  reason: string;
  date: Date;
  address: string;
  jotoRemarks?: string;
  aJotoRemarks?: string;
  courseOfficerRemarks?: string;
  status: STATUS;
}

export interface SickRequest {
  pno: any;
  rank?: string;
  name?: string;
  batch?: string;
  division?: string;
  mobile?: string;
  punishment: boolean;
  reason: string;
  smoRemarks?: string;
  timeIn: Date;
  timeout: Date;
  date?: Date;
  status: STATUS;
}

export const LeaveRequestService = new _leaveRequestService();
