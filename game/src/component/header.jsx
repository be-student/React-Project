import React from "react";
import "./header.css";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header__size"
      >
        <FontAwesomeIcon className="header__yellowicon" icon={faPencilRuler} />
        <span>웹 게임</span>
      </div>
      <div
        onClick={() => {
          console.log(location);
        }}
      >
        테스트 버튼
      </div>
      <Link to="/Login" className="header__login">
        로그인
      </Link>
      <Link to="/" className="header__yellow header__btn">
        <div>홈 화면으로</div>
      </Link>
    </div>
  );
};

export default Header;
