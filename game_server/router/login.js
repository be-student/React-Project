import express from "express";
import passport from "passport";
import bcrypt from "bcrypt";
import { isLoggedIn, isNotLoggedIn } from "./middleware";
import User from "../models/user";

const router = express.Router();

routert.post("register", isNotLoggedIn, async (req, res, next) => {
  const { email, password, nickname } = req.body;
  try {
    const exUser = await User.findOne({ where: email });
    if (exUser) {
      return res.json({ success: "false", error: "exist" });
    }
    const hash = await bcrypt.hash(password, 12);
    await User.create({
      email,
      password: hash,
      nickname,
    });
    return res.json({ success: "true" });
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

router.post("/login", isNotLoggedIn, async (req, res, next) => {
  passport.authenticate("local", (authError, user, info) => {
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      return res.json();
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect("/");
    });
  })(req, res, next);
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("/");
});

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);
