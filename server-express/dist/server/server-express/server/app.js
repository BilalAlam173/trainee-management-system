"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongo_1 = require("./mongo");
const routes_1 = require("./routes");
const app = express();
exports.app = app;
dotenv.config();
app.set("port", process.env.PORT || 5000);
app.use("/", express.static(path.join(__dirname, "../public")));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "test") {
    app.use(morgan("dev"));
}
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            yield mongo_1.default();
            routes_1.default(app);
            app.get("/*", (req, res) => {
                res.send({ yo: "to" });
            });
            if (!module.parent) {
                app.listen(app.get("port"), () => console.log(`TMS server running on port ${app.get("port")}`));
            }
        }
        catch (err) {
            console.error(err);
        }
    });
}
main();
//# sourceMappingURL=app.js.map