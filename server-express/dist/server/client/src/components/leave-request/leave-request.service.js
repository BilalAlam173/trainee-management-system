"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const globals_1 = require("../../globals");
const data_service_1 = require("../../services/data.service");
class _leaveRequestService {
    constructor() {
        this.tabs = [
            {
                title: "Outstation",
                type: globals_1.REQUEST_TYPE.OUTSTATION,
            },
            {
                title: "Casual",
                type: globals_1.REQUEST_TYPE.CASUAL,
            },
            {
                title: "Sick Report",
                type: globals_1.REQUEST_TYPE.SICK,
            },
            {
                title: "Short Leave",
                type: globals_1.REQUEST_TYPE.SHORT,
            },
            {
                title: "Night Off",
                type: globals_1.REQUEST_TYPE.NIGHT,
            },
        ];
        // outstationRequests: LeaveRequest[] = [
        //   {
        //     pno: "0001",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "",
        //     jotoRemarks: "",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0002",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0003",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0004",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0005",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "Approved",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0006",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "Approved",
        //     status: STATUS.APPROVED,
        //   },
        //   {
        //     pno: "0007",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Not Approved, under punishment",
        //     captainRemarks: "Approved",
        //     status: STATUS.DECLINED,
        //   },
        // ];
        // casualRequests: LeaveRequest[] = [
        //   {
        //     pno: "0008",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "",
        //     jotoRemarks: "",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0009",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0010",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "",
        //     deanRemarks: "",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0011",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0012",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Not Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0013",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Approved",
        //     captainRemarks: "Not Approved",
        //     status: STATUS.APPROVED,
        //   },
        //   {
        //     pno: "0014",
        //     leaveAmount: 7,
        //     wef: new Date(),
        //     leavesAvailed: 3,
        //     reason: "To perform Umrah",
        //     address: "Suadia Arab, Ceasar's Palace",
        //     date: new Date(),
        //     courseOfficerRemarks: "Approved",
        //     jotoRemarks: "Approved",
        //     deanRemarks: "Not Approved, under punishment",
        //     captainRemarks: "Approved",
        //     status: STATUS.DECLINED,
        //   },
        // ];
        // sickRequests: SickRequest[] = [
        //   {
        //     pno: "0015",
        //     punishment: false,
        //     reason: "Pain in intestine",
        //     smoRemarks: "",
        //     timeIn: new Date(),
        //     timeout: new Date(),
        //     date: new Date(),
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0016",
        //     punishment: false,
        //     reason: "",
        //     smoRemarks: "",
        //     timeIn: new Date(),
        //     timeout: new Date(),
        //     date: new Date(),
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0017",
        //     punishment: false,
        //     reason: "",
        //     smoRemarks: "",
        //     timeIn: new Date(),
        //     timeout: new Date(),
        //     date: new Date(),
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0018",
        //     punishment: true,
        //     reason: "",
        //     smoRemarks: "",
        //     timeIn: new Date(),
        //     timeout: new Date(),
        //     date: new Date(),
        //     status: STATUS.PENDING,
        //   },
        // ];
        // shortLeaveRequests: ShortRequest[] = [
        //   {
        //     pno: "0019",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "",
        //     courseOfficerRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0020",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "Approved",
        //     status: STATUS.PENDING,
        //     courseOfficerRemarks: "",
        //   },
        //   {
        //     pno: "0021",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "Approved",
        //     courseOfficerRemarks: "Approved",
        //     status: STATUS.PENDING,
        //   },
        // ];
        // nightOffRequests: ShortRequest[] = [
        //   {
        //     pno: "0022",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "",
        //     courseOfficerRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0023",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "Approved",
        //     courseOfficerRemarks: "",
        //     status: STATUS.PENDING,
        //   },
        //   {
        //     pno: "0024",
        //     startTime: new Date(),
        //     endTime: new Date(),
        //     reason: "Home visit",
        //     date: new Date(),
        //     address: "R-34, Block-15",
        //     jotoRemarks: "",
        //     aJotoRemarks: "Approved",
        //     courseOfficerRemarks: "Approved",
        //     status: STATUS.PENDING,
        //   },
        // ];
        this.buildFullLeaveMap = (data) => {
            const map = [];
            map[globals_1.ADMIN_TYPES.COURSE_OFFICER] = data.filter((item) => !(item.courseOfficerRemarks ||
                item.jotoRemarks ||
                item.deanRemarks ||
                item.captainRemarks));
            map[globals_1.ADMIN_TYPES.JOTO] = data.filter((item) => item.courseOfficerRemarks &&
                !(item.jotoRemarks || item.deanRemarks || item.captainRemarks));
            map[globals_1.ADMIN_TYPES.DEAN] = data.filter((item) => item.courseOfficerRemarks &&
                item.jotoRemarks &&
                !(item.deanRemarks || item.captainRemarks));
            map[globals_1.ADMIN_TYPES.CAPTAIN_TRAINING] = data.filter((item) => item.courseOfficerRemarks &&
                item.jotoRemarks &&
                item.deanRemarks &&
                !item.captainRemarks);
            map[globals_1.ADMIN_TYPES.DPTY_COMMANDANT] = data.filter((item) => item.courseOfficerRemarks &&
                item.jotoRemarks &&
                item.deanRemarks &&
                item.captainRemarks);
            return map;
        };
        this.buildShortLeaveMap = (data) => {
            const map = [];
            map[globals_1.ADMIN_TYPES.AJOTO] = data.filter((item) => !(item.courseOfficerRemarks || item.jotoRemarks || item.aJotoRemarks));
            map[globals_1.ADMIN_TYPES.COURSE_OFFICER] = data.filter((item) => item.aJotoRemarks && !(item.courseOfficerRemarks || item.jotoRemarks));
            map[globals_1.ADMIN_TYPES.JOTO] = data.filter((item) => item.aJotoRemarks && item.courseOfficerRemarks && !item.jotoRemarks);
            return map;
        };
        this.buildSickLeaveMap = (data) => {
            const map = [];
            map[globals_1.ADMIN_TYPES.MEDICAL] = data;
            return map;
        };
        this.requestToAdminMap = [];
        this.requestToStatusMap = [];
        this.buildMaps = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const leaveReqs = yield data_service_1.getAllLeaveReq();
            const shortReqs = yield data_service_1.getAllShortReqs();
            const sickReqs = yield data_service_1.getAllSickReqs();
            /** Outstation requests */
            this.requestToAdminMap[globals_1.REQUEST_TYPE.OUTSTATION] = this.buildFullLeaveMap(leaveReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.OUTSTATION));
            this.requestToStatusMap[globals_1.REQUEST_TYPE.OUTSTATION] = this.buildStatusMap(leaveReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.OUTSTATION));
            /** Casual requests */
            this.requestToAdminMap[globals_1.REQUEST_TYPE.CASUAL] = this.buildFullLeaveMap(leaveReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.CASUAL));
            this.requestToStatusMap[globals_1.REQUEST_TYPE.CASUAL] = this.buildStatusMap(leaveReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.CASUAL));
            /** Short requests */
            this.requestToAdminMap[globals_1.REQUEST_TYPE.SHORT] = this.buildShortLeaveMap(shortReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.SHORT));
            this.requestToStatusMap[globals_1.REQUEST_TYPE.SHORT] = this.buildStatusMap(shortReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.SHORT));
            /** Night Off requests */
            this.requestToAdminMap[globals_1.REQUEST_TYPE.NIGHT] = this.buildShortLeaveMap(shortReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.NIGHT));
            this.requestToStatusMap[globals_1.REQUEST_TYPE.NIGHT] = this.buildStatusMap(shortReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.NIGHT));
            /**Sick requests */
            this.requestToAdminMap[globals_1.REQUEST_TYPE.SICK] = this.buildSickLeaveMap(sickReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.SICK));
            this.requestToStatusMap[globals_1.REQUEST_TYPE.SICK] = this.buildStatusMap(sickReqs.filter((x) => x.type === globals_1.REQUEST_TYPE.SICK));
        });
        this.buildStatusMap = (data) => {
            const map = [];
            map[globals_1.STATUS.APPROVED] = data.filter((x) => x.status == globals_1.STATUS.APPROVED);
            map[globals_1.STATUS.PENDING] = data.filter((x) => x.status == globals_1.STATUS.PENDING);
            map[globals_1.STATUS.DECLINED] = data.filter((x) => x.status == globals_1.STATUS.DECLINED);
            map[3] = data;
            return map;
        };
        this.buildMaps();
    }
}
exports.LeaveRequestService = new _leaveRequestService();
//# sourceMappingURL=leave-request.service.js.map