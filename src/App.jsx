import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import BgChanger from "./components/BgChanger";


import Header from "./components/shared/Header";
import Toast from "./components/shared/Toast";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import KakaoJoin from "./pages/KakaoJoin";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

function App() {
    const bgState = useSelector(s=>s.bgColor);

    return (
    <div className={`w-full h-screen ${bgState.color} flex justify-center items-end md:items-center transition duration-700 ease-in-out`}>
        <BgChanger />
        <div id="app-container" className="w-full h-95p md:w-1000 md:h-90p min-h- bg-white md:bg-opacity-80 rounded-t-xl md:rounded-xl">
            <Header />
            <main className="w-full h-90p p-3 flex flex-col items-center">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="/users/kakao/login">
                        <KakaoJoin />
                    </Route>
                    <Route path="/*">
                        <Error404 />
                    </Route>
                </Switch>
            </main>
        </div>
        <Toast />
    </div>
    );
}

export default App;
