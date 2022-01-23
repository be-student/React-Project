import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
//const {sequelize}
//import passportConfig from "passport";
dotenv.config();

const __dirname = path.resolve();

const app = express();

app.set("port", process.env.PORT || 8001);
// sequelize.sync({force})
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/img", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", express.static(path.join(__dirname, "/build")));
app.get("/", (req, res) => {
  console.log(1);
  res.sendFile(path.join(__dirname + "/build"));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE !== "production" ? err : {};
  res.status(err.status || 500);
  res.sendFile("error");
});
app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
