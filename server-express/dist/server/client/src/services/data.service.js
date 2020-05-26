"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../globals");
const axios_1 = require("axios");
/* Trainee CRUD* */
exports.getTrainee = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "trainee/" + id).then((res) => res.data);
};
exports.getAllTrainees = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "trainees").then((res) => res.data);
};
exports.updateTrainee = (user) => {
    return axios_1.default.put(globals_1.SERVER_URL + "trainee/" + user._id, user);
};
exports.deleteTrainee = (userId) => {
    return axios_1.default.delete(globals_1.SERVER_URL + "trainee/" + userId);
};
exports.addTrainee = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "trainee", user);
};
/** LeaveRequest CRUD */
exports.getLeaveReq = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "leaveRequest/" + id).then((res) => res.data);
};
exports.getAllLeaveReq = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "leaveRequests").then((res) => res.data);
};
exports.updateLeaveReq = (user) => {
    return axios_1.default.put(globals_1.SERVER_URL + "leaveRequest/" + user._id, user);
};
exports.addLeaveReq = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "leaveRequest", user);
};
/** SHORT REQ CRUD */
exports.getShortReq = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "shortLeave/" + id).then((res) => res.data);
};
exports.getAllShortReqs = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "shortLeaves").then((res) => res.data);
};
exports.updateShortReq = (item) => {
    return axios_1.default.put(globals_1.SERVER_URL + "shortLeave/" + item._id, item);
};
exports.addShortReq = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "shortLeave", user);
};
/** SICK REQ CRUD */
exports.getSickReq = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "sickLeave/" + id).then((res) => res.data);
};
exports.getAllSickReqs = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "sickLeaves").then((res) => res.data);
};
exports.updateSickReq = (user) => {
    return axios_1.default.put(globals_1.SERVER_URL + "sickLeave/" + user._id, user);
};
exports.addSickReq = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "sickLeave", user);
};
/** EVENT CRUD */
exports.getEvent = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "event/" + id).then((res) => res.data);
};
exports.getAllEvents = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "events").then((res) => res.data);
};
exports.updateEvent = (user) => {
    return axios_1.default.put(globals_1.SERVER_URL + "event/" + user._id, user);
};
exports.deleteEvent = (userId) => {
    return axios_1.default.delete(globals_1.SERVER_URL + "event/" + userId);
};
exports.addEvent = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "event", user);
};
/** ANNOUNCEMENT CRUD */
exports.getAnnouncement = (id) => {
    return axios_1.default.get(globals_1.SERVER_URL + "announcements/" + id).then((res) => res.data);
};
exports.getAllAnnouncements = () => {
    return axios_1.default.get(globals_1.SERVER_URL + "announcements").then((res) => res.data);
};
exports.updateAnnouncement = (user) => {
    return axios_1.default.put(globals_1.SERVER_URL + "announcement/" + user._id, user);
};
exports.addAnnouncement = (user) => {
    return axios_1.default.post(globals_1.SERVER_URL + "announcement", user);
};
class Trainee {
    constructor() {
        this._id = "";
        this.pno = "";
        this.password = "";
        this.rank = "";
        this.name = "";
        this.division = "";
        this.batch = "";
        this.mobile = "";
        this.status = "";
        this.statusReason = "";
    }
}
exports.Trainee = Trainee;
//# sourceMappingURL=data.service.js.map