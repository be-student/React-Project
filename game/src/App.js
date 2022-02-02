import React, { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import ResponseCheck from "./pages/ResponseCheck";
import Home from "./pages/home/Home.jsx";
import Header from "./component/header.jsx";
import ResponseContainer from "./container/ResponseContainer";
import Result from "./pages/responseCheck/Result";
import RSP from "./pages/RSP/RSPHOOKS";
import Lotto from "./pages/Lotto/LottoClass.jsx";
import Login from "./pages/home/Login.jsx";
import socketIOClient from "socket.io-client";
import HIDE from "./component/toLogin.jsx";

const App = () => {
  const ENDPOINT = "http://127.0.0.1:8001";
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("msg", (data) => {
      console.log(data);
    });
    return socket.disconnect();
  }, []);
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
          <Route path="/RSP" element={<RSP />} />
          <Route path="Lotto" element={<Lotto />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {logged === false ? <HIDE /> : null}
      </BrowserRouter>
    </div>
  );
};
export default App;
