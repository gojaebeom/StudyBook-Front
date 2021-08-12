import { combineReducers } from "redux";
import login from "./modules/login";
import loggedInMenu from "./modules/loggedInMenu";
import posts from "./modules/posts";
import postDetail from "./modules/postDetail";
import postFilter from "./modules/postFilter";
import postCreate from "./modules/postCreate";
import userDetail from "./modules/userDetail";
import search from "./modules/search";
import toast from "./modules/toast";


const mainReducer = combineReducers({
    login,
    posts,
    postDetail,
    postFilter,
    loggedInMenu,
    postCreate,
    userDetail,
    search,
    toast
});
export default mainReducer;