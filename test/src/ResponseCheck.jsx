import React, { useState, useRef } from "react";
import "./ResponseCheck.css";
import { Link } from "react-router-dom";
const ResponseCheck = ({
  state,
  setState,
  message,
  setMessage,
  result,
  setResult,
}) => {
  let startTime = useRef(0);
  let timeout = useRef();
  const onReset = () => {
    setResult([]);
  };
  const getSum = () => {
    //console.log(result);
    let temp = 0;
    for (let i = 0; i < result.length; i++) {
      temp += result[i];
    }
    return temp;
  };
  const renderAverage = () => {
    //이렇게 분리보다는 새 컴포넌트가 좋긴 함

    // return result.length === 0 ? null : (
    //   <div>
    //     <div>
    //       평균 시간 :{getSum() / result.length}
    //       ms
    //     </div>
    //     <button onClick={onReset}>리셋</button>
    //   </div>
    // );
    return result.length === 0 ? null : (
      <div>
        <ul>
          {result.map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>
        <div>
          평균 시간 :
          {Math.round(result.reduce((a, c) => a + c, 0) * 100) /
            100 /
            result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </div>
    );
  };
  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      //성급하게 클릭
      setState("waiting");
      setMessage("이런 성급하셨군요 초록색이 된 후에 클릭하세요");
      clearTimeout(timeout.current);
    } else if (state === "now") {
      //반응속도 체크
      let endTime = new Date();

      //setResult([...result, endTime - startTime.current]);
      setResult((prevResult) => [...prevResult, endTime - startTime.current]);
      if (result.length !== 4) {
        setState("waiting");
        setMessage("클릭해서 시작하세요");
        return;
      } else {
        setState("end");
      }
    }
  };
  return (
    <div className="game__container">
      <div>{result.length}/5</div>
      <div id="screen" className={state} onClick={onClickScreen}>
        {result.length === 5 ? (
          <Link to="/result" className="button">
            결과 확인
          </Link>
        ) : (
          message
        )}
      </div>
      {renderAverage()}
    </div>
  );
};

export default ResponseCheck;
