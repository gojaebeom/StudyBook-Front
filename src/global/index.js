import { combineReducers } from "redux";

import bgColor from "./modules/bgColor";
import toast from "./modules/toast";
import login from "./modules/login";
import loginNav from "./modules/loginNav";

const mainReducer = combineReducers({
    bgColor,
    toast,
    login,
    loginNav
});
export default mainReducer;