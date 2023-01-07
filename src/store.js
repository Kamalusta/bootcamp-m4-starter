import { createStore } from "redux";
import reducer from "./redux/reduce";

let store = createStore(reducer);

export default store;