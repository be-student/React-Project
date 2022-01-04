// import { createAction,handleActions } from "redux-actions";
import { createAction, handleActions } from "redux-actions";

const SAMPLE_ACTION = "SAMPLE_ACTION";

const SET_STATE = "response/SET_STATE";
const SET_MESSAGE = "response/SET_MESSAGE";
const SET_RESULT = "response/SET_RESULT";

// export const sample_act = () => ({
//   type: SAMPLE_ACTION,
// });
export const setState = createAction(SET_STATE, (text) => text);
// export const setState = (text) => ({
//   type: SET_STATE,
//   text,
// });

export const setMessage = createAction(SET_MESSAGE, (text) => text);
// export const setMessage = (text) => ({
//   type: SET_MESSAGE,
//   text,
// });
export const setResult = createAction(SET_RESULT, (time) => time);
// export const setResult = (time) => {
//   console.log(time);
//   return {
//     type: SET_RESULT,
//     time,
//   };
// };

const initialState = {
  state: "waiting",
  message: "클릭해서 시작하세요",
  result: [],
};

// const responseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_STATE:
//       return {
//         ...state,
//         state: action.text,
//       };
//     case SET_MESSAGE:
//       return {
//         ...state,
//         message: action.text,
//       };
//     case SET_RESULT:
//       return {
//         ...state,
//         result: state.result.concat(action.time),
//       };

//     default:
//       return state;
//   }
// };
const responseReducer = handleActions(
  {
    // [SET_STATE]: (state, action) => ({ ...state, state: action.payload }),
    // [SET_MESSAGE]: (state, action) => ({ ...state, message: action.payload }),
    // [SET_RESULT]: (state, action) => ({
    //   ...state,
    //   result: state.result.concat(action.payload),
    // }),
    [SET_STATE]: (state, { payload: text }) => ({ ...state, state: text }),
    [SET_MESSAGE]: (state, { payload: text }) => ({ ...state, message: text }),
    [SET_RESULT]: (state, { payload: time }) => ({
      ...state,
      result: [...state.result, time],
    }),
  },
  initialState
);
export default responseReducer;
