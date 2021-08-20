import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import BgChanger from "./components/BgChanger";


import Header from "./components/shared/Header";
import Toast from "./components/shared/Toast";
import LoginNavHandler from "./events/LoginNavHandler";
import RefreshHandler from "./events/RefreshHandler";
import About from "./pages/About";
import Draft from "./pages/Draft";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import KakaoJoin from "./pages/KakaoJoin";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";
import Posts from "./pages/Posts";
import UserDetail from "./pages/UserDetail";
import UserEdit from "./pages/UserEdit";

function App() {
    const bgState = useSelector(s=>s.bgColor);

    return (
    <RefreshHandler>
        <LoginNavHandler>
            <div className={`w-full h-screen ${bgState.color} flex justify-center items-start`}>
                <BgChanger />
                <div id="app-container" className="w-full h-95p md:w-800 bg-white rounded-b-xl">
                    <Header />
                    <main className="w-full h-87p p-3 flex flex-col items-center overflow-x-hidden md:overflow-y-auto section pr-2">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/posts/draft">
                                <Draft />
                            </Route>
                            <Route exact path="/posts">
                                <Posts />
                            </Route>
                            <Route exact path="/posts/:id">
                                <PostDetail />
                            </Route>
                           
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route path="/users/kakao/login">
                                <KakaoJoin />
                            </Route>
                            <Route path="/users/:id/edit">
                                <UserEdit />
                            </Route>
                            <Route path="/users/:id">
                                <UserDetail />
                            </Route>
                        
                            <Route path="/*">
                                <Error404 />
                            </Route>
                        </Switch>
                    </main>
                </div>
                <Toast />
            </div>
        </LoginNavHandler>
    </RefreshHandler>
    );
}

export default App;
