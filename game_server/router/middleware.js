import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("로그인 필요");
  }
};
export const isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send("이미 로그인 되었습니다.");
  }
};
export const verifyToken=(req,res,next)=>{
  try{
    req.decoded=jwt.verify(req.headers.authorization,process.env.JWT_SECRET);
  }
}