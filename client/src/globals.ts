import { Trainee } from "./services/data.service";
import { LoginService } from "./components/login/login.service";

export const SERVER_URL = "http://localhost:5000/api/";

export enum USER_ROLES {
  ADMIN,
  MEDICAL_ADMIN,
  APPOINTMENT_HOLDER,
  TRAINEE,
}
export const ADMINS = [
  USER_ROLES.ADMIN,
  USER_ROLES.MEDICAL_ADMIN,
  USER_ROLES.APPOINTMENT_HOLDER,
];

export enum REQUEST_TYPE {
  OUTSTATION,
  CASUAL,
  SICK,
  SHORT,
  NIGHT,
}
export enum RANKS {
  SUB_LT,
  LT,
  LT_CDR,
}

export enum STATUS {
  APPROVED,
  DECLINED,
  PENDING,
  ALL,
  ADD,
}

export enum ADMIN_TYPES {
  COURSE_OFFICER,
  JOTO,
  AJOTO,
  DEAN,
  CAPTAIN_TRAINING,
  DPTY_COMMANDANT,
  MEDICAL,
}

export const isAdmin = () => {
  const role = currentUser()?.role;
  return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
};
export const isSuperOfficer = () => {
  const role = currentUser()?.role;
  return role == USER_ROLES.ADMIN || role == USER_ROLES.APPOINTMENT_HOLDER;
};
export const isTrainee = () => {
  const role = currentUser()?.role;
  return role == USER_ROLES.TRAINEE;
};
export const isSuperAdmin = () => {
  const role = currentUser()?.role;
  return role == USER_ROLES.ADMIN;
};
export const isMedicalAdmin = () => {
  const role = currentUser()?.role;
  return role == USER_ROLES.MEDICAL_ADMIN;
};
export const currentUser = (): Trainee => {
    return JSON.parse(localStorage.getItem("user") || "") || null;
};

export const getPrimaryTabText = (tab: REQUEST_TYPE): string => {
  switch (tab) {
    case REQUEST_TYPE.OUTSTATION:
      return "Outstation Leave Requests";
    case REQUEST_TYPE.CASUAL:
      return "Casual Leave Requests";
    case REQUEST_TYPE.SICK:
      return "Sick Reports";
    case REQUEST_TYPE.SHORT:
      return "Short Leave Requests";
    case REQUEST_TYPE.NIGHT:
      return "Night Off Leave Requests";
    default:
      return "";
  }
};
export const getSecondaryTabText = (tab: STATUS | ADMIN_TYPES): string => {
  if (isSuperAdmin()) {
    switch (tab) {
      case ADMIN_TYPES.COURSE_OFFICER:
        return "Course Officer";
      case ADMIN_TYPES.JOTO:
        return "JOTO";
      case ADMIN_TYPES.AJOTO:
        return "Assistant JOTO";
      case ADMIN_TYPES.DEAN:
        return "Dean";
      case ADMIN_TYPES.CAPTAIN_TRAINING:
        return "Captain Training";
      case ADMIN_TYPES.DPTY_COMMANDANT:
        return "Deputy Commandant";
      case ADMIN_TYPES.MEDICAL:
        return "Medical Officer";
      default:
        return "All";
    }
  } else if (!isAdmin()) {
    switch (tab) {
      case STATUS.APPROVED:
        return "Approved";
      case STATUS.PENDING:
        return "Pending";
      case STATUS.DECLINED:
        return "Declined";
    }
  }
  return "";
};
