import { Route, Switch } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import Main from "./components/pages/Main";
import PostDetail from "./components/pages/PostDetail";
import Login from "./components/pages/Login";


export default function App() {
  return (
  <div className="App w-full flex justify-center">
    <div className="relative w-full md:w-600 h-screen flex flex-col items-center z-10">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/posts/:id">
          <PostDetail/>
        </Route>
        <Route exact path="/users/login">
          <Login/>
        </Route>
      </Switch>
      
    </div>
    <div className="fixed w-full flex justify-center border z-40 md:z-0">
      <div className="w-0 h-0 md:w-800 md:h-screen flex justify-end items-center ">
        <LoginButton />
      </div>
    </div>
  </div>
  );
}
