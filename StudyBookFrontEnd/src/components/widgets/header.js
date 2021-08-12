import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./search";
import CoverImg from "../../images/StudyBook.svg";

function Header({ }){


    const loginState = useSelector(state => state.login);
    const loggedInMenuState = useSelector(state => state.loggedInMenu);
    const dispatch = useDispatch();

    const toggleModalHandler = () => {
        dispatch({type: "TOGGLE_LOGGEDIN_MENU", payload: !loggedInMenuState});
    }

    const logoutHandler = () => {
        window.localStorage.removeItem("act");
        window.localStorage.removeItem("rft");
        dispatch({type: "IS_LOGGED_OUT"});
    }

    return(
    <header className="w-full flex justify-center mb-5">
        <div className="w-full md:w-1000 flex justify-between items-center">
            <div className="flex items-center">
                <figure className="font-pacifico text-4xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent p-5">
                    <Link to="/">Studybook</Link>
                </figure>
                <Search />
            </div>
            <ul className="font-noto-light text-lg flex justify-center items-center">
                <li >
                {
                    !loginState.isLoggedIn &&
                    <div className="font-noto-bold text-lg">
                        <Link to="/login">로그인</Link>
                    </div>
                }
                {
                    loginState.isLoggedIn &&
                    <div
                        onClick={toggleModalHandler}
                        id="loggedin-toggle"
                        className="relative w-12 h-12 rounded-full flex justify-center items-center border cursor-pointer"
                    >
                        <div className="relative group w-9 h-9  rounded-full bg-white flex flex-col items-center justify-center">
                            <img src={ loginState.profile ? loginState.profile : CoverImg } alt="profile img" className="w-full h-full rounded-full"/>
                        </div>
                        <div
                            className={`${loggedInMenuState ? "flex" : "hidden"} flex-col rounded-sm absolute right-0 -bottom-52 w-40 bg-white border z-10`}>
                            <Link to={`/users/${ loginState.userId }`} className="p-3 border-b">내 정보</Link>
                            <Link to="/draft" className="p-3 border-b">글 작성</Link>
                            <Link to={`/users/${ loginState.userId }/update`} className="p-3 border-b">내 정보 수정</Link>
                            <div
                                onClick={logoutHandler}
                                className="p-3 border-b-2">
                                로그아웃
                            </div>
                        </div>
                    </div>
                }
                </li>
            </ul>
        </div>
    </header>
    );
}
export default Header;