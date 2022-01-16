import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
const Slide = ({ img, to }) => {
  return (
    <Link to={to}>
      <IMG src={img} />
    </Link>
  );
};
export default Slide;
