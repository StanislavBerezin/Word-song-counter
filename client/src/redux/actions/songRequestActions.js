import * as actionTypes from "./actionTypes";
import serverConnect from "../../axios/connection";

export const set_lyrics = response => {
  return {
    type: actionTypes.SET_LYRICS,
    response
  };
};
export const set_error = message => {
  return {
    type: actionTypes.SET_ERROR,
    ErrorMessage: message
  };
};

export const request_lyrics = query => {
  return dispatch => {
    // VALIDATION for the query
    // eslint-disable-next-line
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!query) {
      return dispatch(set_error("Error: Enter valid data"));
    } else if (query.length < 3) {
      return dispatch(set_error("Error: A minimum of 3 charecters"));
    } else if (query.length > 30) {
      return dispatch(set_error("Error: A maximum of 30 charecters"));
    } else if (format.test(query)) {
      return dispatch(set_error("Error: Symbols $%@! are not accepted"));
    }

    //REQUEST to server for the song
    serverConnect.post(`/searchSong/${query}`)
      .then(response => {
        dispatch(set_lyrics(response));
      })
      .catch(() => {
        dispatch(set_error("Nothing found... ¯\\_(ツ)_/¯"));
      });
  };
};
