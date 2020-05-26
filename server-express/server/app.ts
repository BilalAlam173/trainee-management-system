import * as dotenv from "dotenv";
import * as express from "express";
import * as morgan from "morgan";
import * as path from "path";

import setMongo from "./mongo";
import setRoutes from "./routes";

const app = express();
dotenv.config();
app.set("port", process.env.PORT || 5000);
app.use("/", express.static(path.join(__dirname, "../public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

async function main() {
  try {
    await setMongo();
    setRoutes(app);
    app.get("/*", (req, res) => {
      res.send({ yo: "to" });
    });
    if (!module.parent) {
      app.listen(app.get("port"), () =>
        console.log(`TMS server running on port ${app.get("port")}`)
      );
    }
  } catch (err) {
    console.error(err);
  }
}

main();

export { app };
