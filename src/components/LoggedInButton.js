import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CoverImg from "../images/cover.jpg";

export default function LoggedInButton() {

  const dispatch = useDispatch();
  const logoutHandler = () => 
    dispatch({type:"IS_LOGGED_OUT"});

  return(
    <div className="
      fixed right-6 bottom-6 md:static md:mb-96
      w-16 h-16 md:w-20 md:h-20 rounded-full flex justify-center items-center
      border cursor-pointer"
    >
      <div className="relative group
        w-12 h-12 md:w-16 md:h-16 rounded-full bg-white
        flex flex-col items-center justify-center">
        <img src={CoverImg} alt="profile img" className="w-full h-full rounded-full"/>
        <Link to="/users/1" title="내 정보" className="absolute w-full h-full flex justify-center items-center font-noto-bold text-white">My</Link>

        <Link to="/posts/create" title="글 작성"  className="opacity-0 group-hover:opacity-100 absolute -left-7 -top-6 w-11 h-11 
          rounded-full transition-opacity border bg-white flex justify-center items-center"
        >
          <i className="fas fa-pen text-xl text-gray-500"></i>
        </Link>

        <Link to="/" title="로그아웃" className="opacity-0 group-hover:opacity-100 absolute -right-7 -bottom-6 w-11 h-11 
        rounded-full border bg-white transition-opacity flex justify-center items-center"
          onClick={logoutHandler}
        >
          <i className="fas fa-sign-out-alt text-xl text-gray-500"></i>
        </Link>
      </div>
    </div>
  );
}