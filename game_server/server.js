import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import passport from "passport";
//import passportConfig from "passport";
dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use("/", express.static(path.join(__dirname, "/build")));
app.get("/", (req, res) => {
  console.log(1);
  res.sendFile(path.join(__dirname + "/build"));
});
app.listen(8080, () => {
  console.log("8080포트");
});
