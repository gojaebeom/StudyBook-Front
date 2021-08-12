import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function LoggedInGlobal({ children }){
    const login = useSelector(s=>s.login);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("로그인 매뉴 토글 이벤트 생성");

        function loggedInMenuToggle(e){
            let el = e.target;
            console.log(el.nodeName);
    
            const target = document.querySelector("#loggedin-toggle");
            while (el) {
                console.log(el.nodeName);
                el = el.parentNode;
                
                if (el === target) {
                    return;
                }
                console.log(el);
                if(el === null){
                    break;
                }
                if (el.nodeName === "BODY") {
                    break;
                }
            }
            dispatch({type: "CLOSE_LOGGEDIN_MENU"});
            
        }

        if(login.isLoggedIn){
            document.body.addEventListener("click", loggedInMenuToggle);
        }
        return () => {
            console.log("로그인 매뉴 토글 이벤트 삭제")
            document.body.removeEventListener("click", loggedInMenuToggle);
        }
        
    }, [login]);

    
    return(
    <React.Fragment>
        { children }
    </React.Fragment>
    );
}
export default LoggedInGlobal;