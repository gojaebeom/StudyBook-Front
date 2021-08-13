import { Link } from "react-router-dom";
import img from "../../images/StudyBook.svg";
import ReadMoreBox from "./readMoreBox";

export function Card({ id, userId, nickname, profile, title, tags }){
    return(
    <div className="border flex flex-col items-start p-5 rounded-md">
        <Link to={`/users/${userId}`} className="flex justify-center items-center mb-3" >
            <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                <img src={profile ? profile : img} alt="img" className="rounded-full w-8 h-8"/>
            </div>
            <div>
                {nickname}
            </div>
        </Link> {/* 프로필 */}
        <Link to={`/posts/${id}`} className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
            {title}
        </Link> {/* 제목 */}
        <div className="flex flex-wrap">
            {
                tags.map((item, index)=>{
                    return <Link to={`/tags/${item}`} key={index} className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">{item}</Link>
                })
            }
        </div> 
    </div>     
    )
}

export function LongCard({ id, userId, nickname, profile, title, tags }){
    return(
        <div className="row-span-2 flex flex-col items-start p-5 rounded-md" >
            <Link to={`/users/${userId}`} className="flex justify-center items-center mb-3">
                <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                    <img src={profile ? profile : img} alt="img" className="rounded-full w-8 h-8"/>
                </div>
                <div>
                    {nickname}
                </div>
            </Link> {/* 프로필 */}
            <Link to={`/posts/${id}`} className="font-noto-black text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:text-indigo-600 transition-all delay-75 mb-5">
                {title}
            </Link> {/* 제목 */}

            <ReadMoreBox 
                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                height="h-36"
            />
            <div className="flex flex-wrap">
                {
                    tags.map((item, index)=>{
                        return <Link to={`/tags/${item}`} key={index} className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">{item}</Link>
                    })
                }
            </div>
        </div>
    )
}