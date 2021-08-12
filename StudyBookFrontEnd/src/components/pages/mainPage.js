import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import img from "../../images/StudyBook.svg";
import ReadMoreBox from "../widgets/readMoreBox";
import { useEffect } from "react";
import { apiScaffold } from "../../api";
import { useDispatch, useSelector } from "react-redux";

function MainPage(){

    const dispatch = useDispatch();
    const postsState = useSelector(s => s.posts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await apiScaffold({
            "METHOD": "GET",
            "URL":"/api/posts"
        });
        console.log(res);

        dispatch({type:"INIT_POSTS", payload:{
            ...postsState,
            posts: res.posts
        }});
    },[]);

    return(
    <DefaultLayout>
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

        <div className="w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4 mb-10">
            {
                postsState.posts.map((item, index) => {
                    if(index === 0){
                        return(
                        <div className="row-span-2 flex flex-col items-start p-5 rounded-md">
                            <Link to="/users/1" className="flex justify-center items-center mb-3">
                                <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                                    <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                                </div>
                                <div>
                                    {item.user.nickname}
                                </div>
                            </Link> {/* 프로필 */}
                            <Link to="/posts/1" className="font-noto-black text-2xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:text-indigo-600 transition-all delay-75 mb-5">
                                {item.title}
                            </Link> {/* 제목 */}
            
                            <ReadMoreBox 
                                content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                height="h-36"
                            />
                            <div className="flex flex-wrap">
                                {
                                    item.tags.map((item)=>{
                                        return <Link to={`/tags/${item}`} className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">{item}</Link>
                                    })
                                }
                            </div>
                        </div>
                        )
                    }
                    return(
                    <div className="border flex flex-col items-start p-5 rounded-md">
                        <Link to="/users/1" className="flex justify-center items-center mb-3">
                            <div className="w-10 h-10 flex justify-center items-center border rounded-full mr-3">
                                <img src={img} alt="img" className="rounded-full w-8 h-8"/>
                            </div>
                            <div>
                                {item.user.nickname}
                            </div>
                        </Link> {/* 프로필 */}
                        <Link to="/posts/1" className="font-noto-black text-xl text-gray-700 hover:text-indigo-600 transition-all delay-75 mb-5">
                            {item.title}
                        </Link> {/* 제목 */}
                        <div className="flex flex-wrap">
                            {
                                item.tags.map((item)=>{
                                    return <Link to={`/tags/${item}`} className="font-noto-thin text-xs p-1 rounded-sm bg-gray-100 mr-2">{item}</Link>
                                })
                            }
                        </div> 
                    </div> 
                    )
                })
            }
        </div>
        <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between mb-16">
            <div className="flex items-center">
                <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 ">
                    1
                </button>
                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                    2
                </button>
                <button type="button" className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
                    3
                </button>
                <button type="button" className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
                    4
                </button>
                <button type="button" className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" className="" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </div> {/* 페이지네이션 */}
    </DefaultLayout>
    );
}
export default MainPage;