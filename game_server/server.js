process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() == "production"
    ? "production"
    : "development";

import express from "express";
import path from "path";
import http from "http";

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
