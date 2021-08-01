import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import PostDetail from "./components/pages/PostDetail";
import KakaoLogin from "./components/pages/KakaoLogin";
import UserDetail from "./components/pages/UserDetail";
import PostCreate from "./components/pages/PostCreate";
import DefaultLayout from "./components/layouts/DefaultLayout";
import ErrorLayout from "./components/layouts/ErrorLayout";
import Error404Img from "./images/404.svg";



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
      <Route exact path="/posts/create">
        <DefaultLayout>
          <PostCreate/>
        </DefaultLayout>
      </Route>
      <Route exact path="/posts/:id">
        <DefaultLayout>
          <PostDetail/>
        </DefaultLayout>
      </Route>
      <Route exact path="/users/:id">
        <DefaultLayout>
          <UserDetail/>
        </DefaultLayout>
      </Route>
      <Route exact path="/users/kakao/login">
        <KakaoLogin />
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
