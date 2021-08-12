import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchGlobal({ children }){
    const searchState = useSelector(s=>s.search);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("검색 폼 핸들러 생성");

        if(searchState.mode){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflowY = "scroll";
        }

        function searchFormHandler(e) {
            if(e.code === "Escape"){
                dispatch({type:"SEARCH_TOGGLE"});
            }
        }

        document.body.addEventListener("keyup", searchFormHandler);

        return () => {
            console.log("검색 폼 핸들러 삭제");
            document.body.removeEventListener("keyup", searchFormHandler);
        }
    }, []);

    return(
    <React.Fragment>
        { children }
    </React.Fragment>
    );
}
export default SearchGlobal;