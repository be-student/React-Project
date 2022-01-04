import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResponseCheck from "./ResponseCheck";
import Home from "./Home.jsx";
import Header from "./component/header.jsx";
import Result from "./Result";
const Index = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작");
  const [result, setResult] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/start"
            element={
              <ResponseCheck
                state={state}
                setState={setState}
                message={message}
                setMessage={setMessage}
                result={result}
                setResult={setResult}
              />
            }
          />
          <Route path="/result" element={<Result result={result} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Index;
