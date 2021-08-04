import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, withRouter} from "react-router-dom";

function PostFilter({history}) {

    const filterState = useSelector(state => state.postFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        const pathname = history.location.pathname;
        if (pathname === "/") dispatch({type: "CHANGE_FILTER", payload: "POPULAR"});
        if (pathname === "/sort/latest") dispatch({type: "CHANGE_FILTER", payload: "LATEST"});
        if (pathname === "/sort/old") dispatch({type: "CHANGE_FILTER", payload: "OLD"});
        if (pathname === "/sort/random") dispatch({type: "CHANGE_FILTER", payload: "RANDOM"});
    });

    return (
        <div className="font-noto-light flex flex-col items-center mt-10 mr-5">
            <div className="text-xl text-gray-500 font-noto-bold mb-2">
                필터
            </div>
            <Link to="/" title="인기"
                  className={`${filterState === "POPULAR" && "bg-purple-300 text-purple-700"} w-12 h-12 flex justify-center items-center rounded-2xl text-xl  text-gray-500 hover:bg-purple-300 hover:text-purple-700 transition-all mb-2`}>
                <i className="far fa-thumbs-up"></i>
            </Link>
            <Link to="/sort/latest" title="최신"
                  className={`${filterState === "LATEST" && "bg-yellow-300 text-yellow-600"} w-12 h-12 flex justify-center items-center rounded-2xl text-gray-500 hover:bg-yellow-300 hover:text-yellow-600 text-xl mb-2 `}>
                <i className="far fa-clock"></i>
            </Link>
            <Link to="/sort/old" title="오래된"
                  className={`${filterState === "OLD" && "bg-green-300 text-green-700"} w-12 h-12 flex justify-center items-center rounded-2xl text-gray-500 hover:bg-green-300 hover:text-green-700 text-xl mb-2`}>
                <i className="fas fa-history"></i>
            </Link>
            <Link to="/sort/random" title="랜덤"
                  className={`${filterState === "RANDOM" && "bg-indigo-300 text-indigo-700"} w-12 h-12 flex justify-center items-center rounded-2xl text-gray-500 hover:bg-indigo-300 hover:text-indigo-700 text-xl mb-2`}>
                <i className="fas fa-random"></i>
            </Link>
        </div>
    );
}

export default withRouter(PostFilter);