import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/StudyBook.svg";
import Pagination from "../components/Pagination";
import withPostsHandler from "../hooks/withPostsHandler";

const Posts = ({ posts, sort, sortHandler, searchHandler }) => {
    return(
    <React.Fragment>
        <div className="w-full flex flex-col md:flex-row justify-between ">
            <div className="w-full md:w-72 p-2 mb-2 md:mb-0 flex items-center bg-gray-100  rounded-sm">
                {/* <select className="outline-none rounded-sm bg-gray-50">
                    <option>제목</option>
                    <option>태그</option>
                    <option>작성자</option>
                </select> */}
                <i className="fas fa-search text-black mx-2"></i>
                <input 
                    className="w-full bg-gray-100 outline-none text-black font-noto-light" 
                    placeholder="search a posts"
                    onChange={searchHandler}
                />
            </div>
            <div className="p-2 bg-gray-100 flex justify-center items-center rounded-sm">
                <i className="fas fa-filter text-black"></i>
                <select className="outline-none font-noto-regular bg-gray-100"
                    value={sort}
                    onChange={sortHandler}
                >
                    <option value="recent">최근</option>
                    <option value="old">오래된</option>
                    <option value="views">조회수</option>
                </select>
            </div>
        </div>
        <div className="w-full flex flex-col items-center mt-5">
            <table className="min-w-full leading-normal rounded-md overflow-hidden table-fixed font-noto-light" >
                <thead >
                    <tr>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            작성자
                        </th>
                        <th colSpan="3" scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            제목
                        </th>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            작성일
                        </th>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            조회수
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.length 
                        ? posts.map(e=> {
                            return(
                            <tr key={e.id} >
                                <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to={`/users/${e.user.id}`} className="block relative">
                                                <img alt="profile" src={e.user.profilePreview? "/images/"+e.user.profilePreview: profileImg} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </Link>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                <Link to={`/users/${e.user.id}`} className="block relative">
                                                { e.user.nickname }
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan="3" className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <p className="text-gray-900 whitespace-no-wrap truncate hover:text-indigo-500">
                                        <Link to={`/posts/${e.id}`}>{ e.title }</Link>
                                    </p>
                                </td>
                                <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        { e.publishedAt }
                                    </p>
                                </td>
                                <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                        </span>
                                        <span className="relative">
                                            { e.views ? e.views : "없음" }
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            )
                        })
                        :<tr>
                            <td colSpan="4" className="text-center">데이터가 없습니다 😥</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
        <Pagination />
    </React.Fragment>
    )
}
export default withPostsHandler(Posts);