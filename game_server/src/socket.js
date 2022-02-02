import { Server } from "socket.io";
import axios from "axios";
import cookieParser from "cookie-parser";
import cookie from "cookie-signature";

const socketServer = (server, app, sessionMiddleware) => {
  const io = new Server(server, { path: "/socket.io" });
  app.set("io", io);
  const loggedIn = io.of("/loggedIn");
  const logOff = io.of("/logOff");

  io.on("connection", (socket) => {
    // 웹소켓 연결 시
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속!", ip, socket.id, req.ip);
    socket.on("disconnect", () => {
      // 연결 종료 시
      console.log("클라이언트 접속 해제", ip, socket.id);
      clearInterval(socket.interval);
    });
    socket.on("error", (error) => {
      // 에러 시
      console.error(error);
    });
    socket.on("reply", (data) => {
      // 클라이언트로부터 메시지
      console.log(data);
    });
    socket.interval = setInterval(() => {
      // 3초마다 클라이언트로 메시지 전송
      socket.emit("news", "Hello Socket.IO");
    }, 3000);
  });
  io.use((socket, next) => {
    cookieParser(process.env.COOKIE_SECRET)(
      socket.request,
      socket.request.res || {},
      next
    );
    sessionMiddleware(socket.request, socket.request.res, next);
  });

  logOff.on("connection", (socket) => {
    console.log("logOff 네임스페이스에 접속");
    socket.on("disconnect", () => {
      console.log("logOff 네임스페이스 접속 해제");
    });
  });

  loggedIn.on("connection", (socket) => {
    console.log("loggedIn 네임스페이스에 접속");
    socket.on("disconnect", () => {
      console.log("loggedIn 네임스페이스 접근 해제");
    });
  });
};
export default socketServer;
