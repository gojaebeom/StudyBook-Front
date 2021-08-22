import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import BgChanger from "./components/BgChanger";


import Header from "./components/shared/Header";
import Jukebox from "./components/shared/Jukebox";
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

    const [toggle, setToggle] = useState(true);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
    <RefreshHandler>
        <LoginNavHandler>
            <div className={`w-full h-screen ${bgState.color} flex flex-col items-center justify-start`}>
                <BgChanger />
                <Jukebox />
                <div 
                    id="app-container" 
                    className={`relative w-full ${toggle ? `h-95p`:`h-20`}  md:w-800 bg-white rounded-b-xl overflow-hidden transition-all duration-200 delay-200`}
                >
                    <Header />
                    <main className="w-full h-87p p-3 flex flex-col items-center overflow-x-hidden md:overflow-y-auto section pr-2 z-30">
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
                <div className="relative w-full md:w-800 flex justify-center items-center">
                    <div className="absolute left-0 -top-6 w-full flex justify-center items-center z-10">
                        <button className="w-12 h-12 rounded-full bg-indigo-400 border-4 border-white hover:bg-indigo-500 transition-all"
                            onClick={toggleHandler}
                        >
                            <i className="fas fa-arrows-alt-v text-xl text-white"></i>
                        </button>
                    </div>
                </div>
                <Toast />
                
            </div>
           
        </LoginNavHandler>
    </RefreshHandler>
    );
}

export default App;
