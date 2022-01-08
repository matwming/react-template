import { combineReducers, applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { todosReducer } from "./reducer/todoReducer/todoReducer";

/**
|--------------------------------------------------
| Config rootReducer
|--------------------------------------------------
*/
const rootReducer = combineReducers({
  todo: todosReducer
});

/**
|--------------------------------------------------
| logger middleware
|--------------------------------------------------
*/
const logger = store => next => action => {
  if (typeof action === "function") {
    console.log("dispatching a function");
  } else {
    console.log("dispatching an action", action);
  }
  const result = next(action);
  console.log("nextState", store.getState());
};
/**
|--------------------------------------------------
| logger middleware 结束
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| connect to redux store in chrome
|--------------------------------------------------
*/
let composeEnhancer = compose;
//@ts-ignore
composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk, logger))
);

const configStore = () => {
  return store;
};
export default configStore;
