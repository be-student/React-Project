import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import ResponseCheck from "./pages/ResponseCheck";
import Home from "./pages/home/Home.jsx";
import Header from "./component/header.jsx";
import ResponseContainer from "./container/ResponseContainer";
import Result from "./pages/responseCheck/Result";
import RSP from "./pages/RSPHOOKS";
const App = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작");
  const [result, setResult] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/ResponseCheck" element={<ResponseContainer />} />
          {/* <Route path="/result" element={<Result result={result} />} /> */}
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
