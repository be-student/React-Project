import React, { useState, useRef, useEffect } from "react";
import "./RSP.css";

const rspCoords = {
  바위: "0",
  가위: "-142px",
  보: "-284px",
};

const scores = {
  가위: 1,
  바위: 0,
  보: -1,
};

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

const RSP = () => {
  const [result, setResult] = useState("");
  const [imgCoord, setImgCoord] = useState(rspCoords.바위);
  const [score, setScore] = useState(0);
  const interval = useRef(null);

  //useEffect를 여러번 사용 가능. 클래스형과 차이가 있음
  //클래스는 state를 if문으로 분리해서 한 번만 씀.

  useEffect(() => {
    //setInterval이 계속 사라졌다가 나왔다 하기에 setTimeout과 동일
    //함수 컴포넌트가 매번 다시 실행된다는 성질이 있음.
    //라이프 사이클의 기능을 함.
    //component didmount, component did update
    interval.current = setInterval(changeHand, 100);

    return () => {
      //component will unmount 와 다른 점은
      //
      clearInterval(interval.current);
    };
  }, [imgCoord]); //2번째 배열에 클로저 오류를 없애는 기능
  //imgCoord를 넣어주면 됨. 함수 컴포넌트는 렌더링시 통째로 다 다시 실행
  //imgCoord가 바뀌면서 계속 반복되는 setTimeOut과 동일한 역할
  //빈 배열은 component did mount
  //찬 배열은 component did update 관련 없는 것들 넣으면 이상한 동작
  const changeHand = () => {
    //그대로 하면 클로저 오류.
    console.log("헬로우");
    if (imgCoord === rspCoords.바위) {
      setImgCoord(rspCoords.가위);
    } else if (imgCoord === rspCoords.가위) {
      setImgCoord(rspCoords.보);
    } else if (imgCoord === rspCoords.보) {
      setImgCoord(rspCoords.바위);
    }
  };
  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다");
      setScore((prevScore) => prevScore + 1);
    } else {
      setResult("졌습니다");
      setScore((prevScore) => prevScore - 1);
    }
    //항상
    //클로저 오류 생각 해야됨. 비동기 내에서 바깥 참조 금지.
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100);
    }, 1000);
  };
  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
