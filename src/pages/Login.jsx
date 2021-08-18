import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import LoginCoverImg from "../assets/images/login-cover.png";
import KakaoLoginImg from "../assets/images/kakao.png";
import GoogleLoginImg from "../assets/images/google.png";

const Login = () => {

    const dispatch = useDispatch();
    const googleLoginHandler = () => {
        dispatch({type:"SET_TOAST", payload:{
            content: "준비중인 기능입니다.",
            type: "INFO"
        }});
    }

    return(
    <React.Fragment>
        <div className="w-10/12 md:w-6/12 h-full flex flex-col justify-center items-center">
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
    </React.Fragment>
    )
}
export default Login;