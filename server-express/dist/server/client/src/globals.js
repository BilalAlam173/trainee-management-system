"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER_URL = "http://localhost:5000/api/";
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES[USER_ROLES["ADMIN"] = 0] = "ADMIN";
    USER_ROLES[USER_ROLES["MEDICAL_ADMIN"] = 1] = "MEDICAL_ADMIN";
    USER_ROLES[USER_ROLES["APPOINTMENT_HOLDER"] = 2] = "APPOINTMENT_HOLDER";
    USER_ROLES[USER_ROLES["TRAINEE"] = 3] = "TRAINEE";
})(USER_ROLES = exports.USER_ROLES || (exports.USER_ROLES = {}));
exports.ADMINS = [
    USER_ROLES.ADMIN,
    USER_ROLES.MEDICAL_ADMIN,
    USER_ROLES.APPOINTMENT_HOLDER,
];
var REQUEST_TYPE;
(function (REQUEST_TYPE) {
    REQUEST_TYPE[REQUEST_TYPE["OUTSTATION"] = 0] = "OUTSTATION";
    REQUEST_TYPE[REQUEST_TYPE["CASUAL"] = 1] = "CASUAL";
    REQUEST_TYPE[REQUEST_TYPE["SICK"] = 2] = "SICK";
    REQUEST_TYPE[REQUEST_TYPE["SHORT"] = 3] = "SHORT";
    REQUEST_TYPE[REQUEST_TYPE["NIGHT"] = 4] = "NIGHT";
})(REQUEST_TYPE = exports.REQUEST_TYPE || (exports.REQUEST_TYPE = {}));
var RANKS;
(function (RANKS) {
    RANKS[RANKS["SUB_LT"] = 0] = "SUB_LT";
    RANKS[RANKS["LT"] = 1] = "LT";
    RANKS[RANKS["LT_CDR"] = 2] = "LT_CDR";
})(RANKS = exports.RANKS || (exports.RANKS = {}));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["APPROVED"] = 0] = "APPROVED";
    STATUS[STATUS["DECLINED"] = 1] = "DECLINED";
    STATUS[STATUS["PENDING"] = 2] = "PENDING";
    STATUS[STATUS["ALL"] = 3] = "ALL";
    STATUS[STATUS["ADD"] = 4] = "ADD";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var ADMIN_TYPES;
(function (ADMIN_TYPES) {
    ADMIN_TYPES[ADMIN_TYPES["COURSE_OFFICER"] = 0] = "COURSE_OFFICER";
    ADMIN_TYPES[ADMIN_TYPES["JOTO"] = 1] = "JOTO";
    ADMIN_TYPES[ADMIN_TYPES["AJOTO"] = 2] = "AJOTO";
    ADMIN_TYPES[ADMIN_TYPES["DEAN"] = 3] = "DEAN";
    ADMIN_TYPES[ADMIN_TYPES["CAPTAIN_TRAINING"] = 4] = "CAPTAIN_TRAINING";
    ADMIN_TYPES[ADMIN_TYPES["DPTY_COMMANDANT"] = 5] = "DPTY_COMMANDANT";
    ADMIN_TYPES[ADMIN_TYPES["MEDICAL"] = 6] = "MEDICAL";
})(ADMIN_TYPES = exports.ADMIN_TYPES || (exports.ADMIN_TYPES = {}));
exports.isAdmin = () => {
    var _a;
    const role = (_a = exports.currentUser()) === null || _a === void 0 ? void 0 : _a.role;
    return role == USER_ROLES.ADMIN || role == USER_ROLES.MEDICAL_ADMIN;
};
exports.isSuperOfficer = () => {
    var _a;
    const role = (_a = exports.currentUser()) === null || _a === void 0 ? void 0 : _a.role;
    return role == USER_ROLES.ADMIN || role == USER_ROLES.APPOINTMENT_HOLDER;
};
exports.isTrainee = () => {
    var _a;
    const role = (_a = exports.currentUser()) === null || _a === void 0 ? void 0 : _a.role;
    return role == USER_ROLES.TRAINEE;
};
exports.isSuperAdmin = () => {
    var _a;
    const role = (_a = exports.currentUser()) === null || _a === void 0 ? void 0 : _a.role;
    return role == USER_ROLES.ADMIN;
};
exports.isMedicalAdmin = () => {
    var _a;
    const role = (_a = exports.currentUser()) === null || _a === void 0 ? void 0 : _a.role;
    return role == USER_ROLES.MEDICAL_ADMIN;
};
exports.currentUser = () => {
    return JSON.parse(localStorage.getItem("user") || "") || null;
};
exports.getPrimaryTabText = (tab) => {
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
exports.getSecondaryTabText = (tab) => {
    if (exports.isSuperAdmin()) {
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
    }
    else if (!exports.isAdmin()) {
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
//# sourceMappingURL=globals.js.map