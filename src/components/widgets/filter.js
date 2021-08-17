function Filter(){
    return(
    <div id="filter" className="w-full mb-5 flex flex-wrap">
        <button className="py-2 px-4 border-b-2 border-white flex justify-center items-center">
            <i className="far fa-clock text-2xl text-gray-500 mr-2"></i>
            <span className="font-noto-bold text-xl text-gray-600">최신</span>
        </button>
        <button className="py-2 px-4 border-b-2 border-gray-400 flex justify-center items-center">
            <i className="fas fa-history text-2xl text-gray-500 mr-2"></i>
            <span className="font-noto-bold text-xl text-gray-600">오래된</span>
        </button>
    </div>
    );
}
export default Filter;