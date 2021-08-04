import CoverImg from "../images/cover.jpg";
import {Link} from "react-router-dom";

export default function LoggedInProfile(){
    return(
        <div
            onClick={toggleModalHandler}
            id="loggedin-toggle"
            className="relative w-12 h-12 rounded-full flex justify-center items-center border cursor-pointer"
        >
            <div className="relative group w-9 h-9  rounded-full bg-white flex flex-col items-center justify-center">
                <img src={CoverImg} alt="profile img" className="w-full h-full rounded-full"/>
            </div>
            <div
                className={`${loggedInMenuState ? "flex" : "hidden"} flex-col rounded-sm absolute right-0 -bottom-48 w-40 bg-white border`}>
                <Link to="/users/1" className="p-3 border-b">내 정보</Link>
                <Link to="/posts/create" className="p-3 border-b">글 작성</Link>
                <Link to="/users/1/update" className="p-3 border-b">내 정보 수정</Link>
                <div
                    onClick={logoutHandler}
                    className="p-3 border-b-2">
                    로그아웃
                </div>
            </div>
        </div>
    );
}