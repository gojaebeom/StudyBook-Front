import React from "react";
import { Link } from "react-router-dom";
import CoverImg from "../images/cover.jpg";

export default function PostListItem({ item, qouteColor, titleColor, profileBorderColor }){
  return(
  <React.Fragment>
  <div className="w-full flex flex-col items-center">
    <div className="group relative w-full p-6 ">
      <i className={`fas fa-quote-left ${qouteColor} text-5xl  transition-all`}></i>
      <h1 className={`font-noto-black text-4xl 
      bg-gradient-to-r ${titleColor}
      bg-clip-text text-transparent mb-3`}>
          {item.title}
      </h1>
      <div className="flex justify-start items-center mb-3">
          {/* 프로필 이미지 */}
          <div className={`w-20 h-20 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center 
          mr-3 hover:${profileBorderColor} transition-all cursor-pointer`}>
              <img className="w-16 h-16 rounded-full" 
                  src={item.profileImg ? item.profileImg : CoverImg} alt="cover img" />
          </div>
          <div className="flex flex-col font-noto-medium text-2xl ">
              <div className="font-noto-medium text-black text-2xl">
                {item.nickname}
              </div>
              <div className="font-noto-regular text-lg text-gray-500">
                {item.publishedAt}
              </div>
          </div>
      </div>
      <Link to="/posts/1" className="font-noto-regular text-xl text-gray-600 group-hover:text-black">
        <div dangerouslySetInnerHTML={{ __html: item.content }} className=" 
          max-h-28 overflow-y-hidden overflow-ellipsis break-all
          transition-all">
        </div>
        <span className="text-base">...더보기</span>
      </Link>
    </div>
  </div>
  <div className="relative w-1/2 border-b  my-10"></div>
  </React.Fragment>
  );
}