import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요.",
    result: [],
  };
  timeout;
  startTime;
  endTime;
  onReset = () => {
    this.setState({
      result: [],
    });
  };
  renderAverage = () => {
    //이렇게 분리보다는 새 컴포넌트가 좋긴 함
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        <div>
          평균 시간 :
          {this.state.result.reduce((a, c) => a + c, 0) /
            this.state.result.length}
          ms
        </div>
        <button onClick={this.onReset}>리셋</button>
      </div>
    );
  };
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === "waiting") {
      this.setState({
        state: "ready",
        message: "초록색이 되면 클릭하세요.",
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === "ready") {
      //성급하게 클릭
      this.setState({
        state: "waiting",
        message: "이런 성급하셨군요 초록색이 된 후에 클릭하세요",
      });
      clearTimeout(this.timeout);
    } else if (state === "now") {
      //반응속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: "waiting",
          result: [...prevState.result, this.endTime - this.startTime],
          message: "클릭해서 시작하세요",
        };
      });
    }
  };
  render() {
    return (
      <div>
        <div
          id="screen"
          className={this.state.state}
          onClick={this.onClickScreen}
        >
          {this.state.message}
        </div>
        {this.renderAverage()}
      </div>
    );
  }
}

export default ResponseCheck;
