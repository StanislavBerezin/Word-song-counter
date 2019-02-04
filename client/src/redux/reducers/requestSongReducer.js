import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility.js";

// VALUES needed when working with song requests
const initialState = {
  repeatedWords: {},
  title: String,
  hasResponded: false,
  error: false,
  errorTxt: String
};

//IN case if there is an error
const setErrorState = (state, errorMessage) => {
  return updateObject(state, {
    hasResponded: false,
    error: true,
    errorTxt: errorMessage
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_LYRICS:

      return updateObject(state, {
        repeatedWords: action.response.data.repeatedWords,
        hasResponded: true,
        title: action.response.data.title.toUpperCase(),
        error: false
      });

    case actionTypes.SET_ERROR:
      console.log();
      return setErrorState(state, action.ErrorMessage);

    default:
      return state;
  }
};

export default reducer;
