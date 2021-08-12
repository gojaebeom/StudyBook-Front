import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function ValidationRedirector({ children }){
    const loginState = useSelector(s => s.login);
    const toastState = useSelector(s => s.toast);
    const dispatch = useDispatch();

    if(!loginState.isLoggedIn) {
        console.log("두번 호출")
        dispatch({type:"SET_TOAST", payload:{
            ...toastState,
            mode: true,
            content: "토큰이 만료되었거나, 잘못된 접근입니다.",
            type: "WARNING"
        }});
        return <Redirect to="/"/>;
    }
    return(
    <React.Fragment>
        { children }
    </React.Fragment>
    )
}
export default ValidationRedirector;