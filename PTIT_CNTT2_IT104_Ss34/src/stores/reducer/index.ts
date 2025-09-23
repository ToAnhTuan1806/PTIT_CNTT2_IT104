import { createStore, combineReducers } from "redux";
import { studentReducer } from "./studentReducer";

const rootReducer = combineReducers({
  students: studentReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
