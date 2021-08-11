import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import JoinPage from "./components/pages/joinPage";
import KakaoJoinPage from "./components/pages/kakaoJoinPage";
import MainPage from "./components/pages/mainPage";
import PostDetailPage from "./components/pages/postDetailPage";
import PostDraftPage from "./components/pages/postDraftPage";
import UserDetailPage from "./components/pages/userDetailPage";

function App(){

    const searchState = useSelector(s=>s.search);
    const dispatch = useDispatch();
    // console.log(searchState.mode);
    if(searchState.mode){
        document.body.style.overflow = "hidden";
        document.onkeyup = (e) => {
            if(e.code === "Escape"){
                dispatch({type:"SEARCH_TOGGLE"});
            }
        }
    }else{
        document.body.style.overflow = "scroll";
        document.onkeyup = (e) => {
            if(e.code === "ControlLeft"){
                dispatch({type:"SEARCH_TOGGLE"});
            }
        }
    }
    return(
    <React.Fragment>
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>{/* 메인페이지 */}
            <Route path="/posts/:id">
                <PostDetailPage />
            </Route>{/* 게시글 상세페이지 */}
            <Route path="/draft">
                <PostDraftPage />
            </Route>{/* 게시글 작성페이지 */}
            <Route path="/login">
                <JoinPage />
            </Route>{/* 로그인 페이지 */}
            <Route path="/users/kakao/login">
                <KakaoJoinPage />
            </Route>{/* 카카오 인증 페이지 */}
            <Route path="/users/:id">
                <UserDetailPage />
            </Route>{/* 회원 상세 페이지 */}
        </Switch>
    </React.Fragment>
    )
}
export default App;