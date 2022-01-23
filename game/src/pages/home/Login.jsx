const Login = () => {
  return (
    <div className="timeline">
      <form id="join-form" action="/auth/join" method="post">
        <div className="input-group">
          <label htmlFor="join-email">이메일</label>
          <input id="join-email" type="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="join-nick">닉네임</label>
          <input id="join-nick" type="text" name="nick" />
        </div>
        <div className="input-group">
          <label htmlFor="join-password">비밀번호</label>
          <input id="join-password" type="password" name="password" />
        </div>
        <button id="join-btn" type="submit" className="btn">
          회원가입
        </button>
      </form>
    </div>
  );
};
export default Login;
