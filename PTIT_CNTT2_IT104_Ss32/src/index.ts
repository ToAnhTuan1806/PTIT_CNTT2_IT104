import { createStore } from "redux";
import countReducer from "./store/reducers/countReducer";
import { rootReducer } from "./store/reducers";

const store = createStore(rootReducer);

export default store;
