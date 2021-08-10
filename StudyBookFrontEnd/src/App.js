import React from "react";
import { Route, Switch } from "react-router-dom";
import JoinPage from "./components/pages/joinPage";
import kakaoJoinPage from "./components/pages/kakaoJoinPage";
import MainPage from "./components/pages/mainPage";

function App(){
    return(
    <React.Fragment>
        <Switch>
            <Route exact path="/">
                <MainPage />
            </Route>{/* 메인페이지 */}
            <Route path="/to">
                <MainPage />
            </Route>
            <Route path="/q-or-a">
                <MainPage />
            </Route>
            <Route path="/login">
                <JoinPage />
            </Route>
            <Route path="/users/kakao/login">
                <kakaoJoinPage />
            </Route>
        </Switch>
    </React.Fragment>
    )
}
export default App;