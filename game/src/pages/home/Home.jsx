// import React, { Component, useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-component";
// import "./Home.css";
// const Home = () => {
//   return (
//     <div className="Home__container">
//       <div>
//         <h1>반응속도 테스트</h1>
//         <hr />
//         <h2>유의사항</h2>
//         <p>
//           일반적으로 나이가 들면 뇌의 운동정보 교환능력이 쇠퇴하면서 외부 자극에
//           반응하는 속도가 떨어진다고 합니다. 당신은 반응속도가 얼마나 빠른가요?
//           본 테스트는 총 5회로 구성되어 있습니다.
//         </p>
//         <div className="button">
//           <Link to="/start">테스트 시작</Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Home;
import React, { useState, useEffect, useRef } from "react";
import HomeItem from "./HomeItem";
import styled from "styled-components";
const IMG1 =
  "data:image/jpeg;base64,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";
const IMG2 =
  "data:image/png;base64,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";
const IMG3 =
  "data:image/jpeg;base64,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";

const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const TOTAL_SLIDES = 2;
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
  return (
    <Container>
      <SliderContainer ref={slideRef}>
        <HomeItem img={IMG1} to="RSP" />
        <HomeItem img={IMG2} to="ResponseCheck" />
        <HomeItem img={IMG3} to="Lotto" />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
};
export default Slider;