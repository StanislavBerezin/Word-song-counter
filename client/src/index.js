import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import songReducer from "./redux/reducers/requestSongReducer";


//if ever needs more just to combine them
const rootReducer = combineReducers({
  songRequestor: songReducer
})


const logger = store => {
  return next => {
      return action => {
          console.log('[Middleware] Dispatching', action);
          const result = next(action);
          console.log('[Middleware] next state', store.getState());
          return result;
      }
  }
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

//to allow routing and redux
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
