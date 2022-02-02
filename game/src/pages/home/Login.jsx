import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const nicknameHandler = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:8001/login", {
        email: email,
        password: password,
        nickname: nickname,
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <form className="loginForm" onSubmit={onSubmit}>
        <div>
          <div className="loginForm__div">이메일</div>
          <input
            type="email"
            onChange={emailHandler}
            value={email}
            placeholder="email"
          />
        </div>
        <div>
          <div className="loginForm__div">닉네임</div>
          <input
            type="nickname"
            onChange={nicknameHandler}
            value={nickname}
            placeholder="nickname"
          />
        </div>
        <div>
          <div className="loginForm__div">패스워드</div>
          <input
            type="password"
            onChange={passwordHandler}
            value={password}
            placeholder="password"
          />
        </div>
        <button type="submit">제출</button>
      </form>
    </div>
  );

  // <div className="timeline">
  //   <form id="join-form" action="/auth/join" method="post">
  //     <div className="input-group">
  //       <label htmlFor="join-email">이메일</label>
  //       <input id="join-email" type="email" name="email" />
  //     </div>
  //     <div className="input-group">
  //       <label htmlFor="join-nick">닉네임</label>
  //       <input id="join-nick" type="text" name="nick" />
  //     </div>
  //     <div className="input-group">
  //       <label htmlFor="join-password">비밀번호</label>
  //       <input id="join-password" type="password" name="password" />
  //     </div>
  //     <button id="join-btn" type="submit" className="btn">
  //       회원가입
  //     </button>
  //   </form>
  // </div>
};
export default Login;
