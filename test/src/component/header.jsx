import React from "react";
import "./header1.css";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  return (
    <div className="header">
      <div className="header__size">
        <FontAwesomeIcon className="header__yellowicon" icon={faPencilRuler} />
        <span>심리테스트</span>
      </div>
      <div className="header__yellow header__btn">
        <div>다른 테스트</div>
      </div>
    </div>
  );
};

export default Header;
