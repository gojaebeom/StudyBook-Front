import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";

function RefreshHandler({ children }){
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
    <React.Fragment>
        { children }
    </React.Fragment>
    );
}
export default RefreshHandler;