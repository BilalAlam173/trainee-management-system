"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const admin_1 = require("./controllers/admin");
const trainee_1 = require("./controllers/trainee");
const leaveRequest_1 = require("./controllers/leaveRequest");
const shortRequest_1 = require("./controllers/shortRequest");
const sickRequest_1 = require("./controllers/sickRequest");
const event_1 = require("./controllers/event");
const announcement_1 = require("./controllers/announcement");
function setRoutes(app) {
    const router = express.Router();
    const adminCtrl = new admin_1.default();
    const traineeCtrl = new trainee_1.default();
    const leaveRequestCtrl = new leaveRequest_1.default();
    const shortLeaveCtrl = new shortRequest_1.default();
    const sickLeaveCtrl = new sickRequest_1.default();
    const eventCtrl = new event_1.default();
    const announcementCtrl = new announcement_1.default();
    // admins
    router.route("/admin/login").post(adminCtrl.login);
    router.route("/admins").get(adminCtrl.getAll);
    router.route("/admins/count").get(adminCtrl.count);
    router.route("/admin").post(adminCtrl.insert);
    router.route("/admin/:id").get(adminCtrl.get);
    router.route("/admin/:id").put(adminCtrl.update);
    router.route("/admin/:id").delete(adminCtrl.delete);
    // leaveRequest
    router.route("/leaveRequests").get(leaveRequestCtrl.getAll);
    router.route("/leaveRequests/count").get(leaveRequestCtrl.count);
    router.route("/leaveRequest").post(leaveRequestCtrl.insert);
    router.route("/leaveRequest/:id").get(leaveRequestCtrl.get);
    router.route("/leaveRequest/:id").put(leaveRequestCtrl.update);
    router.route("/leaveRequest/:id").delete(leaveRequestCtrl.delete);
    // shortLeave
    router.route("/shortLeaves").get(shortLeaveCtrl.getAll);
    router.route("/shortLeaves/count").get(shortLeaveCtrl.count);
    router.route("/shortLeave").post(shortLeaveCtrl.insert);
    router.route("/shortLeave/:id").get(shortLeaveCtrl.get);
    router.route("/shortLeave/:id").put(shortLeaveCtrl.update);
    router.route("/shortLeave/:id").delete(shortLeaveCtrl.delete);
    // sickLeave
    router.route("/sickLeaves").get(sickLeaveCtrl.getAll);
    router.route("/sickLeaves/count").get(sickLeaveCtrl.count);
    router.route("/sickLeave").post(sickLeaveCtrl.insert);
    router.route("/sickLeave/:id").get(sickLeaveCtrl.get);
    router.route("/sickLeave/:id").put(sickLeaveCtrl.update);
    router.route("/sickLeave/:id").delete(sickLeaveCtrl.delete);
    // event
    router.route("/events").get(eventCtrl.getAll);
    router.route("/events/count").get(eventCtrl.count);
    router.route("/event").post(eventCtrl.insert);
    router.route("/event/:id").get(eventCtrl.get);
    router.route("/event/:id").put(eventCtrl.update);
    router.route("/event/:id").delete(eventCtrl.delete);
    // announcement
    router.route("/announcements").get(announcementCtrl.getAll);
    router.route("/announcements/count").get(announcementCtrl.count);
    router.route("/announcement").post(announcementCtrl.insert);
    router.route("/announcement/:id").get(announcementCtrl.get);
    router.route("/announcement/:id").put(announcementCtrl.update);
    router.route("/announcement/:id").delete(announcementCtrl.delete);
    // Trainees
    router.route("/trainee/login").post(traineeCtrl.login);
    router.route("/trainees").get(traineeCtrl.getAll);
    router.route("/trainees/count").get(traineeCtrl.count);
    router.route("/trainee").post(traineeCtrl.insert);
    router.route("/trainee/:id").get(traineeCtrl.get);
    router.route("/trainee/:id").put(traineeCtrl.update);
    router.route("/trainee/:id").delete(traineeCtrl.delete);
    // Apply the routes to our appliadminion with the prefix /api
    app.use("/api", router);
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map