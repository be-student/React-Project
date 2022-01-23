import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const IMG = styled.img`
  width: 100%;
  height: 70vh;
  display: block;
`;
const LINK = styled(Link)`
  width: 100%;
  height: 70vh;
  display: block;
`;
const DIV = styled.div`
  width: 100%;
  height: 70vh;
`;
const Slide = ({ img, to }) => {
  const navigate = useNavigate();
  return (
    <IMG
      src={img}
      onClick={() => {
        navigate(to);
      }}
    />
  );
};
export default Slide;
//<IMG src={img} />

/* <LINK className="Homeitem__LINK" to={to}>
      <IMG src={img} />
    </LINK> */
