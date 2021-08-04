import { combineReducers } from "redux";
import login from "./modules/login";
import loggedInMenu from "./modules/loggedInMenu";
import posts from "./modules/posts";
import postDetail from "./modules/postDetail";
import postFilter from "./modules/postFilter";
import postCreate from "./modules/postCreate";


const mainReducer = combineReducers({
    login,
    posts,
    postDetail,
    postFilter,
    loggedInMenu,
    postCreate
});
export default mainReducer;