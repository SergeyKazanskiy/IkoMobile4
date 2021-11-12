import { createStore, combineReducers } from "redux";
import { systemReducer } from "./system/reducers";

const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = () => createStore(rootReducer);

export default configureStore;
