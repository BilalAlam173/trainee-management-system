import * as express from "express";

import AdminCtrl from "./controllers/admin";
import TraineeCtrl from "./controllers/trainee";
import LeaveRequestCtrl from "./controllers/leaveRequest";
import ShortLeaveCtrl from "./controllers/shortRequest";
import SickRequestCtrl from "./controllers/sickRequest";
import EventCtrl from "./controllers/event";
import AnnouncementCtrl from "./controllers/announcement";

function setRoutes(app) {
  const router = express.Router();
  const adminCtrl = new AdminCtrl();
  const traineeCtrl = new TraineeCtrl();
  const leaveRequestCtrl = new LeaveRequestCtrl();
  const shortLeaveCtrl = new ShortLeaveCtrl();
  const sickLeaveCtrl = new SickRequestCtrl();
  const eventCtrl = new EventCtrl();
  const announcementCtrl = new AnnouncementCtrl();

  // admins
  router.route("/login").post(adminCtrl.login);
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
  router.route("/ashortLeaves").get(shortLeaveCtrl.getAll);
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
  router.route("/login").post(traineeCtrl.login);
  router.route("/trainees").get(traineeCtrl.getAll);
  router.route("/trainees/count").get(traineeCtrl.count);
  router.route("/trainee").post(traineeCtrl.insert);
  router.route("/trainee/:id").get(traineeCtrl.get);
  router.route("/trainee/:id").put(traineeCtrl.update);
  router.route("/trainee/:id").delete(traineeCtrl.delete);

  // Apply the routes to our appliadminion with the prefix /api
  app.use("/api", router);
}

export default setRoutes;
