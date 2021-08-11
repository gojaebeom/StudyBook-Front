import { useDispatch, useSelector } from "react-redux";

function Search(){
    const searchState = useSelector(s=>s.search);
    const dispatch = useDispatch();
    const SearchToggleHandler = () => {
        dispatch({type:"SEARCH_TOGGLE"});
    }
    return(
    <div>
        <button 
            className="outline-none flex items-center"
            title="검색"
            onClick={SearchToggleHandler}
        >
            <i className="fas fa-search text-2xl text-gray-600 mr-1"></i>
            <span className="font-pacifico text-lg text-gray-600">Ctrl</span>
        </button>
        <div className={`${searchState.mode ? "fixed" : "hidden"} left-0 top-0 w-full h-screen bg-black bg-opacity-40 z-50 flex justify-center items-start`}>
            <div className="w-600 h-600 bg-white rounded-xl mt-20 shadow-lg">
                <div className="w-full flex justify-between items-center p-5 border-b ">
                    <i className="fas fa-search text-2xl text-blue-400 mr-5"></i>
                    <input className="outline-none w-10/12" placeholder="내용을 검색하세요"/>
                    <button className="border rounded-md py-1 px-3"
                        onClick={SearchToggleHandler}
                    >
                        esc
                    </button>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Search;