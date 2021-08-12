import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

function RefreshPage({ children }){
    const loginState = useSelector(s => s.login);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("load", () => {
            console.log("페이지 새로 갱신");
            const accessToken = window.localStorage.getItem("act");
            
            console.log(accessToken);
            if(!accessToken) return;

            let decode;
            try{
                decode = jwt_decode(accessToken);
            }catch(e){
                console.log(e);
                // throw new Error(e);
                return false;
            }
            
            console.log(decode);
            dispatch({type:"IS_LOGGED_IN", payload:{
                userId: decode.id,
                profile: ""
            }});
        });
    },[]);

    return(
    <React.Fragment>
        { children }
    </React.Fragment>
    );
}
export default RefreshPage;