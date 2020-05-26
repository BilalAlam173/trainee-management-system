"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("../../globals");
const axios_1 = require("axios");
class LoginService {
    static submitLogin(cred) {
        let url;
        let payload;
        if (globals_1.ADMINS.includes(cred.role)) {
            url = globals_1.SERVER_URL + "admin/login";
            payload = {
                username: cred.username,
                password: cred.password,
            };
        }
        else {
            url = globals_1.SERVER_URL + "trainee/login";
            payload = {
                pno: cred.username,
                password: cred.password,
            };
        }
        return axios_1.default.post(url, payload).then((res) => {
            var _a, _b, _c;
            localStorage.setItem("token", (_a = res.data) === null || _a === void 0 ? void 0 : _a.token);
            localStorage.setItem("user", JSON.stringify((_b = res.data) === null || _b === void 0 ? void 0 : _b.user));
            localStorage.setItem("isTrainee", (_c = res.data) === null || _c === void 0 ? void 0 : _c.isTrainee);
        });
    }
}
exports.LoginService = LoginService;
LoginService.logout = () => {
    localStorage.clear();
    window.location.href = window.location.origin + "/";
};
//# sourceMappingURL=login.service.js.map