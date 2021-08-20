import axios from "axios";
import jwtDecode from "jwt-decode";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import { apiScaffold } from "../api";

const KakaoJoin = ({location}) => {

    const dispatch = useDispatch();
    const loginState = useSelector(state => state.login);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const code = location.search.split("code=")[1];

        const params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('client_id', process.env.REACT_APP_KAKAO_CLIENT_ID);
        params.append('redirect_uri', process.env.REACT_APP_KAKAO_REDIRECT_URL);
        params.append('code', code);

        const kakaoRes = await axios({
            method: "post",
            url: "https://kauth.kakao.com/oauth/token",
            headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=utf-8"
            },
            data: params,
        })
        .then(data => data.data)
        .catch(err => err.response.status);

        if(kakaoRes === 500){
            return alert("카카오 서버요청이 정상적으로 처리되지 않았습니다.");
        }

        // console.log(kakaoRes.access_token);

        const studybookRes = await axios({
            method: "post",
            url: "/api/users/kakao-login",
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
            data: {"accessToken": kakaoRes.access_token},
        })
        .then(data => data.data)
        .catch(err => err.response.status);

        console.log(studybookRes);

        if(studybookRes === 500){
            return alert("서버요청이 정상적으로 처리되지 않았습니다.");
        }

        const { accessToken, refreshToken } = studybookRes.tokens;

        window.localStorage.setItem("act", accessToken);
        window.localStorage.setItem("rft", refreshToken);

        const act = jwtDecode(accessToken);

        dispatch({type: "IS_LOGGED_IN", payload:{...loginState, isLoggedIn: true, userId: act.id, profile: act.profile ? "/images/"+act.profile : "" }});
    });

    return <Redirect to="/"/>;
}

export default withRouter(KakaoJoin);