import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import defaultProfile from "../../assets/images/StudyBook.svg";

const Header = ({ history }) => {

    const loginState = useSelector(state => state.login);
    const loginNavState = useSelector(state => state.loginNav);
    const dispatch = useDispatch();

    const toggleModalHandler = () => {
        dispatch({type: "TOGGLE_LOGIN_NAV", payload: !loginNavState});
    }

    const logoutHandler = () => {
        window.localStorage.removeItem("act");
        window.localStorage.removeItem("rft");
        dispatch({type: "IS_LOGGED_OUT"});
        history.push("/");
    }

    return(
    <header className="w-full flex justify-between items-center p-5">
        <div className="flex">
            <figure className="mr-5">
                <Link to="/" className="font-pacifico text-3xl text-black">StudyBook</Link>
            </figure>
            <ul className="flex justify-center items-center font-noto-medium">
                <li className="mr-2"><NavLink exact to="/" activeStyle={{color:"#8258FA"}}>Home</NavLink></li>
                <li className="mr-2"><NavLink to="/posts" activeStyle={{color:"#8258FA"}}>Posts</NavLink></li>
                <li className="mr-2"><NavLink to="/about" activeStyle={{color:"#8258FA"}}>About</NavLink></li>
            </ul>
        </div>
        <div className="font-noto-medium">
            {
                !loginState.isLoggedIn &&
                <div className="font-noto-bold text-lg">
                    <NavLink to="/login" activeStyle={{color:"#8258FA"}}>Login</NavLink>
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
                        <img src={ loginState.profile ? loginState.profile : defaultProfile } alt="profile img" className="w-full h-full rounded-full"/>
                    </div>
                    <div
                        className={`${loginNavState ? "flex" : "hidden"} font-noto-light flex-col rounded-sm absolute right-0 -bottom-48 w-40 bg-white border z-50`}>
                        <Link to={`/users/${ loginState.userId }`} className="p-3 border-b">내 정보</Link>
                        <Link to="/posts/draft" className="p-3 border-b">글 작성</Link>
                        <Link to={`/users/${ loginState.userId }/edit`} className="p-3 border-b">내 정보 수정</Link>
                        <div
                            onClick={logoutHandler}
                            className="p-3 border-b-2">
                            로그아웃
                        </div>
                    </div>
                </div>
            }
        </div>
    </header>
    );
}
export default withRouter(Header);