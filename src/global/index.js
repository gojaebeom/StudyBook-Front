import { combineReducers } from "redux";

import bgColor from "./modules/bgColor";
import toast from "./modules/toast";
import login from "./modules/login";

const mainReducer = combineReducers({
    bgColor,
    toast,
    login
});
export default mainReducer;