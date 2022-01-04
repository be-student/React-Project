import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home__container">
      <div>
        <h1>반응속도 테스트</h1>
        <hr />
        <h2>유의사항</h2>
        <p>
          일반적으로 나이가 들면 뇌의 운동정보 교환능력이 쇠퇴하면서 외부 자극에
          반응하는 속도가 떨어진다고 합니다. 당신은 반응속도가 얼마나 빠른가요?
          본 테스트는 총 5회로 구성되어 있습니다.
        </p>
        <div className="button">
          <Link to="/start">테스트 시작</Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
