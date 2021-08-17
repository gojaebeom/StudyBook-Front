import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Toast(){
    const toastState = useSelector(s => s.toast);
    const dispatch = useDispatch();

    useEffect(() => {
        let delay;
        if(toastState.mode){
            console.log("토스트 상태 변경 감지");
            
            delay = setTimeout(() => {
                dispatch({type: "CLOSE_TOAST"});
            }, 3000);
        }
        return () => {
            console.log(delay);
            console.log("딜레이 삭제");
            clearTimeout(delay);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[toastState]);


    let bgColor = "bg-green-500";
    let icon = "fa-check-circle";
    if(toastState.type === "SUCCESS"){
        bgColor = "bg-green-500";
        icon = "fa-check-circle";
    }
    else if(toastState.type === "INFO") {
        bgColor = "bg-blue-500";
        icon = "fa-info-circle";
    }
    else if(toastState.type === "WARNING"){
        bgColor = "bg-yellow-500";
        icon = "fa-exclamation-triangle";
    }
    else if(toastState.type === "ERROR"){
        bgColor = "bg-red-500";
        icon = "fas fa-bomb";
    }

    const closeToastHandler = () => {
        dispatch({type: "CLOSE_TOAST"});
    }

    return(
    <div className={`${toastState.mode ? "fixed" : "hidden"} bottom-16 flex justify-center w-full`}>
        <div className={`h-10 px-3 flex items-center ${bgColor}  rounded-sm text-white font-noto-light z-10 shadow-2xl`}>
            <span><i className={`fas ${icon} mr-2`}></i></span>
            <span>{toastState.content}</span>        
            <button className="outline-none ml-3"
                onClick={closeToastHandler}
            >
                <i className="fas fa-times"></i>
            </button>
        </div>
    </div>
    );
}
export default Toast;