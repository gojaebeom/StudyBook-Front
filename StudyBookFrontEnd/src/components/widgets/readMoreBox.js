import { useRef } from "react";
import { Link } from "react-router-dom";

function ReadMoreBox({content,height,id}){
    const sampleContent = useRef();
    return(
    <div className="flex flex-col">
        <div ref={sampleContent} className={`${height} overflow-ellipsis overflow-hidden font-noto-light`}>
            {content}
        </div>
        <Link to={`/posts/${id}`} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1 w-32 rounded-2xl mt-2 mb-5">
            <div className="w-full bg-white rounded-xl text-center font-pacifico text-gray-800 text-sm hover:bg-opacity-0 hover:text-white transition-all delay-100">
                Read more
            </div>
        </Link>
    </div>
    );
}
export default ReadMoreBox;