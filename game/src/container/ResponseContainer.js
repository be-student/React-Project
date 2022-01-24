import { connect } from "react-redux";
import React from "react";
import ResponseCheck from "../pages/responseCheck/ResponseCheck";
import {
  setState,
  setMessage,
  setResult,
  clearResult,
} from "../module/responseReducer";
const ResponseContainer = ({
  state,
  setState,
  message,
  setMessage,
  result,
  setResult,
  clearResult,
}) => {
  return (
    <ResponseCheck
      state={state}
      setState={setState}
      message={message}
      setMessage={setMessage}
      result={result}
      setResult={setResult}
      clearResult={clearResult}
    />
  );
};
// state,
// setState,
// message,
// setMessage,
// result,
// setResult,
const mapStateToProps = (state) => ({
  state: state.responseReducer.state,
  message: state.responseReducer.message,
  result: state.responseReducer.result,
});
const mapDispatchToProps = (dispatch) => ({
  setState: (text) => {
    dispatch(setState(text));
  },
  setMessage: (text) => {
    dispatch(setMessage(text));
  },
  setResult: (time) => {
    dispatch(setResult(time));
  },
  clearResult: () => {
    dispatch(clearResult());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ResponseContainer);
