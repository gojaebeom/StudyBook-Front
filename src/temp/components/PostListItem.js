import React from "react";
import {Link} from "react-router-dom";
import CoverImg from "../../images/StudyBook.svg";

export default function PostListItem({item, qouteColor, titleColor, profileBorderColor, detailMode}) {
    return (
        <React.Fragment>
            <div className="w-full flex flex-col items-center">
                <div className="group relative w-full p-7">
                    <i className={`fas fa-quote-left ${qouteColor} text-3xl  transition-all`}></i>
                    <Link to={`/posts/${item.id}`}>
                        <h1 className={`font-noto-black text-4xl 
                            bg-gradient-to-r ${titleColor}
                            bg-clip-text text-transparent mb-3`}>
                            {item.title}
                        </h1>
                    </Link>
                    <div className="w-full flex justify-start">
                        <div className={`${detailMode ? 'hidden' : 'flex'} justify-start items-center mb-3`}>
                            {/* 프로필 이미지 */}
                            <div className={`w-14 h-14 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center 
            mr-3 hover:${profileBorderColor} transition-all cursor-pointer`}>
                                <img className="w-11 h-11 rounded-full"
                                    src={item.user.profile ? item.user.profile : CoverImg} alt="cover img"/>
                            </div>
                            <div className="flex flex-col font-noto-medium">
                                <div className="font-noto-medium text-black text-xl">
                                    {item.user.nickname}
                                </div>
                                <div className="font-noto-regular text-base text-gray-500">
                                    {item.publishedAt}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        {
                            item.tags.map((item, index) => {
                                return(

                                <Link key={index} to={`/tags/${item}`} className="mr-2">
                                    <span className="text-gray-500 mr-1">#</span>
                                    <span className="text-gray-600 font-bold">{item}</span>
                                </Link>

                                );
                            })
                        }
                    </div>
                    <div className="flex mt-2">
                        <Link to="/" className="py-1 px-3 hover:bg-gray-50 transition-all rounded-md font-noto-thin">
                            <i className="far fa-heart mr-2"></i>
                            <span>무관심</span>
                        </Link>
                        <Link to="/" className="py-1 px-3 hover:bg-gray-50 transition-all rounded-md font-noto-thin">
                            <i className="far fa-comments mr-2"></i>
                            <span>댓글을 달아주세요</span>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}