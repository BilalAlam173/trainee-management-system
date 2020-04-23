export enum USER_ROLES {
  ADMIN,
  MEDICAL_ADMIN,
  APPOINTMENT_HOLDER,
  TRAINEE,
}

export enum REQUEST_TYPE {
  OUTSTATION,
  CASUAL,
  SICK,
  SHORT,
  NIGHT,
}

export enum STATUS {
  APPROVED,
  DECLINED,
  PENDING,
}

export enum ADMIN_TYPES {
  COURSE_OFFICER,
  JOTO,
  DEAN,
  CAPTAIN_TRAINING,
  DPTY_COMMANDANT,
}

export const isAdmin = () => {
  const role = Number(localStorage.getItem("role"));
  return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
};
export const isSuperAdmin = () => {
  const role = Number(localStorage.getItem("role"));
  return role == USER_ROLES.ADMIN;
};
export const isMedicalAdmin = () => {
  const role = Number(localStorage.getItem("role"));
  return role == USER_ROLES.MEDICAL_ADMIN;
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
      case ADMIN_TYPES.DEAN:
        return "Dean";
      case ADMIN_TYPES.CAPTAIN_TRAINING:
        return "Captain Training";
      case ADMIN_TYPES.DPTY_COMMANDANT:
        return "Deputy Commandant";
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
