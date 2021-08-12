import React from "react";
import { Route, Switch } from "react-router-dom";
import LoggedInGlobal from "./components/global/loggedInGlobal";
import RefreshPage from "./components/global/refreshPage";
import SearchGlobal from "./components/global/searchGlobal";
import Error404Page from "./components/pages/error/404";
import JoinPage from "./components/pages/joinPage";
import KakaoJoinPage from "./components/pages/kakaoJoinPage";
import MainPage from "./components/pages/mainPage";
import PostDetailPage from "./components/pages/postDetailPage";
import PostDraftPage from "./components/pages/postDraftPage";
import UserDetailPage from "./components/pages/userDetailPage";
import Toast from "./components/widgets/toast";

function App(){

    
    return(
    <RefreshPage>
        <LoggedInGlobal>
            <SearchGlobal>
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
                    <Route path="/*">
                        <Error404Page />
                    </Route>{/* 에러 페이지 */}
                </Switch>
                <Toast />
            </SearchGlobal>
        </LoggedInGlobal>
    </RefreshPage>
    )
}
export default App;