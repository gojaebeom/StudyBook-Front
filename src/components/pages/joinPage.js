import {Link} from "react-router-dom";
import LoginCoverImg from "../../images/login-cover.png";
import KakaoLoginImg from "../../images/kakao.png";
import GoogleLoginImg from "../../images/google.png";
import { useDispatch } from "react-redux";

function JoinPage() {

    const dispatch = useDispatch();
    const googleLoginHandler = () => {
        dispatch({type:"SET_TOAST", payload:{
            content: "준비중인 기능입니다.",
            type: "INFO"
        }});
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
            <div className="w-600 border rounded-lg flex flex-col justify-center items-center px-5 py-10 bg-white">
                <figure className="font-noto-black text-3xl bg-gradient-to-r from-gray-500 to-gray-900
        bg-clip-text text-transparent">
                    <Link to="/">STUDYBOOK</Link>
                </figure>
                <img src={LoginCoverImg} alt="login" className="w-10/12"/>
                <br/>
                <a
                    href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URL}&response_type=code`}
                    className="border w-10/12 h-16 flex justify-center items-center bg-yellow-300 font-noto-bold text-lg">
                    카카오 로그인
                    <img src={KakaoLoginImg} alt="logo" className="w-8 h-8 ml-2"/>
                </a>
                <br/>
                <button
                    onClick={googleLoginHandler}
                    className="border w-10/12 h-16 flex justify-center items-center bg-white font-noto-bold text-lg">
                    구글 로그인
                    <img src={GoogleLoginImg} alt="logo" className="w-8 h-8 ml-2"/>
                </button>
                <br/>
                <Link to="/" className="text-sm font-noto-regular text-gray-600">
                    로그인 안할래요 🤨
                </Link>
            </div>
        </div>
    );
}
export default JoinPage;