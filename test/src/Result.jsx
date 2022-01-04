import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";
const Result = ({ result }) => {
  return (
    <div className="result__container">
      <div>
        평균 시간 :
        {Math.round(result.reduce((a, c) => a + c, 0) * 100) /
          100 /
          result.length}
        ms
      </div>
      <ol>
        {result.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ol>
      <div className="button">
        <Link to="/">홈으로 이동하기</Link>
      </div>
    </div>
  );
};

export default Result;
