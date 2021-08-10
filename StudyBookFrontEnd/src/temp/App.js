import React from "react";
import {Route, Switch} from "react-router-dom";
import Main from "./components/pages/Main";
import PostDetail from "./components/pages/PostDetail";
import KakaoLogin from "./components/pages/KakaoJoin";
import UserDetail from "./components/pages/UserDetail";
import PostCreate from "./components/pages/PostCreate";
import ErrorLayout from "./components/layouts/ErrorLayout";
import Error404Img from "../images/404.svg";
import Login from "./components/pages/Login";

export default function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/sort/latest">
                    <Main/>
                </Route>
                <Route path="/sort/old">
                    <Main/>
                </Route>
                <Route path="/sort/random">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route exact path="/posts/create">
                    <PostCreate/>
                </Route>
                <Route exact path="/posts/:id">
                    <PostDetail/>
                </Route>
                <Route exact path="/users/:id">
                    <UserDetail/>
                </Route>
                <Route exact path="/users/kakao/login">
                    <KakaoLogin/>
                </Route>
                <Route exact path="/tags/:tagname">
                    <div>태그</div>
                </Route>
                <Route exact path="/403">
                    <ErrorLayout
                        imagePath={Error404Img}
                        errorMessage="You don't have permission"
                        errorType="403"
                    />
                </Route>
                <Route exact path="/*">
                    <ErrorLayout
                        imagePath={Error404Img}
                        errorMessage="Not Found"
                        errorType="404"
                    />
                </Route>
            </Switch>
        </React.Fragment>
    );
}
