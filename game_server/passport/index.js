import { serializeUser, deserializeUser } from "passport";
import local from "./localStrategy";
import kakao from "./kakaoStrategy";
import User, { findOne } from "../models/user";

export default () => {
  serializeUser((user, done) => {
    done(null, user.id);
  });
  deserializeUser((id, done) => {
    //여기에서 req.user가 나옴.
    findOne({
      where: { id },
      include: [
        {
          model: User, //필요한 것만 골라서 보내주는 역할. password를 보내지 않는 것.
          attributes: ["id", "nick"],
          as: "Followers",
        },
        {
          model: User,
          attributes: ["id", "nick"],
          as: "Followings",
        },
      ],
    })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  local();
  kakao();
};
