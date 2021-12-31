import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilters";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
