import { Route, Switch } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import Main from "./components/pages/Main";
import PostDetail from "./components/pages/PostDetail";
import KakaoLogin from "./components/pages/KakaoLogin";
import useLogin from "./hooks/useLogin";
import LoginButtonContainer from "./components/LoginButtonContainer";
import LoggedInButton from "./components/LoggedInButton";
import UserDetail from "./components/pages/UserDetail";
import PostCreate from "./components/pages/PostCreate";
import Header from "./components/Header";


export default function App() {

  const { isLogin, setIsLogin } = useLogin();

  return (
  <div className="App w-full flex justify-center">
    <div className="relative w-full md:w-700 h-screen flex flex-col items-center z-10">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
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
          <KakaoLogin
            setIsLogin={setIsLogin}
          />
        </Route>
      </Switch>
    </div>
    <LoginButtonContainer>
        { isLogin && <LoggedInButton setIsLogin={setIsLogin}/> }
        { !isLogin && <LoginButton /> }
    </LoginButtonContainer>
  </div>
  );
}
