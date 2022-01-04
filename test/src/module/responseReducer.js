// import { createAction,handleActions } from "redux-actions";

const SAMPLE_ACTION = "SAMPLE_ACTION";

const SET_STATE = "response/SET_STATE";
const SET_MESSAGE = "response/SET_MESSAGE";
const SET_RESULT = "response/SET_RESULT";

export const sample_act = () => ({
  type: SAMPLE_ACTION,
});

export const setState = (text) => ({
  type: SET_STATE,
  text,
});
export const setMessage = (text) => ({
  type: SET_MESSAGE,
  text,
});
export const setResult = (time) => {
  console.log(time);
  return {
    type: SET_RESULT,
    time,
  };
};

const initialState = {
  state: "waiting",
  message: "클릭해서 시작하세요",
  result: [],
};

const responseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        state: action.text,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.text,
      };
    case SET_RESULT:
      return {
        ...state,
        result: state.result.concat(action.time),
      };

    default:
      return state;
  }
};

export default responseReducer;
