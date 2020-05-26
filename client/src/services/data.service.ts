import { USER_ROLES, SERVER_URL } from "../globals";
import axios from "axios";
import {
  LeaveRequest,
  ShortRequest,
  SickRequest,
} from "../components/leave-request/leave-request.service";
import { Event } from "../components/event/event.service";
/* Trainee CRUD* */
export const getTrainee = (id: string): Promise<Trainee> => {
  return axios.get(SERVER_URL + "trainee/" + id).then((res) => res.data);
};

export const getAllTrainees = (): Promise<Trainee[]> => {
  return axios.get(SERVER_URL + "trainees").then((res) => res.data);
};
export const updateTrainee = (user: Trainee): Promise<void> => {
  return axios.put(SERVER_URL + "trainee/" + user._id, user);
};
export const deleteTrainee = (userId: string): Promise<void> => {
  return axios.delete(SERVER_URL + "trainee/" + userId);
};

export const addTrainee = (user: Trainee): Promise<void> => {
  return axios.post(SERVER_URL + "trainee", user);
};

/** LeaveRequest CRUD */

export const getLeaveReq = (id: string): Promise<LeaveRequest> => {
  return axios.get(SERVER_URL + "leaveRequest/" + id).then((res) => res.data);
};

export const getAllLeaveReq = (): Promise<LeaveRequest[]> => {
  return axios.get(SERVER_URL + "leaveRequests").then((res) => res.data);
};
export const updateLeaveReq = (user: Trainee): Promise<void> => {
  return axios.put(SERVER_URL + "leaveRequest/" + user._id, user);
};

export const addLeaveReq = (user: LeaveRequest): Promise<void> => {
  return axios.post(SERVER_URL + "leaveRequest", user);
};

/** SHORT REQ CRUD */

export const getShortReq = (id: string): Promise<ShortRequest> => {
  return axios.get(SERVER_URL + "shortLeave/" + id).then((res) => res.data);
};

export const getAllShortReqs = (): Promise<ShortRequest[]> => {
  return axios.get(SERVER_URL + "shortLeaves").then((res) => res.data);
};
export const updateShortReq = (item: ShortRequest): Promise<void> => {
  return axios.put(SERVER_URL + "shortLeave/" + item._id, item);
};

export const addShortReq = (user: ShortRequest): Promise<void> => {
  return axios.post(SERVER_URL + "shortLeave", user);
};

/** SICK REQ CRUD */

export const getSickReq = (id: string): Promise<SickRequest> => {
  return axios.get(SERVER_URL + "sickLeave/" + id).then((res) => res.data);
};

export const getAllSickReqs = (): Promise<SickRequest[]> => {
  return axios.get(SERVER_URL + "sickLeaves").then((res) => res.data);
};
export const updateSickReq = (user: SickRequest): Promise<void> => {
  return axios.put(SERVER_URL + "sickLeave/" + user._id, user);
};

export const addSickReq = (user: SickRequest): Promise<void> => {
  return axios.post(SERVER_URL + "sickLeave", user);
};
/** EVENT CRUD */

export const getEvent = (id: string): Promise<Trainee> => {
  return axios.get(SERVER_URL + "event/" + id).then((res) => res.data);
};

export const getAllEvents = (): Promise<Event[]> => {
  return axios.get(SERVER_URL + "events").then((res) => res.data);
};
export const updateEvent = (user: Event): Promise<void> => {
  return axios.put(SERVER_URL + "event/" + user._id, user);
};
export const deleteEvent = (userId: string): Promise<void> => {
  return axios.delete(SERVER_URL + "event/" + userId);
};

export const addEvent = (user: Event): Promise<void> => {
  return axios.post(SERVER_URL + "event", user);
};
/** ANNOUNCEMENT CRUD */

export const getAnnouncement = (id: string): Promise<any> => {
  return axios.get(SERVER_URL + "announcements/" + id).then((res) => res.data);
};
export const getAllAnnouncements = (): Promise<any[]> => {
  return axios.get(SERVER_URL + "announcements").then((res) => res.data);
};
export const updateAnnouncement = (user: any): Promise<void> => {
  return axios.put(SERVER_URL + "announcement/" + user._id, user);
};
export const addAnnouncement = (user: any): Promise<void> => {
  return axios.post(SERVER_URL + "announcement", user);
};

export class Trainee {
  _id?: string = "";
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
