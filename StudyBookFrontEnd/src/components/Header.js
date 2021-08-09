import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {withRouter} from "react-router-dom";
import CoverImg from "../images/cover.jpg";

function Header() {

    const loginState = useSelector(state => state.login);
    const loggedInMenuState = useSelector(state => state.loggedInMenu);
    const dispatch = useDispatch();

    const toggleModalHandler = () => {
        dispatch({type: "TOGGLE_LOGGEDIN_MENU", payload: !loggedInMenuState});
    }

    const logoutHandler = () => {
        dispatch({type: "IS_LOGGED_OUT"});
    }

    return (
        <header className="relative w-full h-16 flex justify-between items-center border-b z-50 bg-white px-6">
            <div className="flex">
                <figure className="font-noto-black text-2xl bg-gradient-to-r from-gray-500 to-gray-900
                    bg-clip-text text-transparent">
                    <Link to="/">STUDYBOOK</Link>
                </figure>
                <div className="w-6/12">
                </div>
            </div>
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
                        <img src={ loginState.profile } alt="profile img" className="w-full h-full rounded-full"/>
                    </div>
                    <div
                        className={`${loggedInMenuState ? "flex" : "hidden"} flex-col rounded-sm absolute right-0 -bottom-48 w-40 bg-white border`}>
                        <Link to={`/users/${ loginState.userId }`} className="p-3 border-b">내 정보</Link>
                        <Link to="/posts/create" className="p-3 border-b">글 작성</Link>
                        <Link to={`/users/${ loginState.userId }/update`} className="p-3 border-b">내 정보 수정</Link>
                        <div
                            onClick={logoutHandler}
                            className="p-3 border-b-2">
                            로그아웃
                        </div>
                    </div>
                </div>
            }
        </header>
    );
}
export default withRouter(Header);