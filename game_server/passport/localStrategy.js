import { use } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { compare } from "bcrypt";

import { findOne } from "../models/user";

export default () => {
  use(
    new LocalStrategy(
      {
        usernameField: "email", //front 에서 보낸 req.body.email을 참조하라는 의미.
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const exUser = await findOne({ where: { email } });
          if (exUser) {
            const result = await compare(password, exUser.password);
            if (result) {
              done(null, exUser);
            } else {
              done(null, false, { message: "비밀번호가 일치하지 않습니다." });
            }
          } else {
            done(null, false, { message: "가입되지 않은 회원입니다." });
          }
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
};
