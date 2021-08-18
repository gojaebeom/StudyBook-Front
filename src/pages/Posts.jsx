import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/StudyBook.svg";

// images
import cover01 from "../assets/images/cover01.jpg";
import cover02 from "../assets/images/cover02.jpg";
import cover03 from "../assets/images/cover03.jpg";
import cover04 from "../assets/images/cover04.jpg";
import cover05 from "../assets/images/cover05.gif";
import cover06 from "../assets/images/cover06.jpg";
import cover07 from "../assets/images/cover07.jpg";
import cover08 from "../assets/images/cover08.jpg";
import cover09 from "../assets/images/cover09.jpg";

const Posts = () => {
    return(
    <React.Fragment>
        <div className="w-full flex flex-col md:flex-row justify-between ">
            <div className="p-2 mb-2 md:mb-0 border md:border-0 flex items-center bg-white w-72 rounded-sm ">
                <select className="outline-none rounded-sm">
                    <option>제목</option>
                    <option>태그</option>
                    <option>작성자</option>
                </select>
                <i className="fas fa-search text-black mx-2"></i>
                <input className="w-full bg-white outline-none text-black font-noto-medium" placeholder="search a posts"/>
            </div>
            <div>
                <select className="outline-none border md:border-0 font-noto-bold p-2 rounded-sm mr-2">
                    <option>한달전</option>
                    <option>일주일</option>
                    <option>오늘</option>
                </select>
                <select className="outline-none border md:border-0 font-noto-bold p-2 rounded-sm">
                    <option>최근</option>
                    <option>오래된</option>
                    <option>조회수</option>
                    <option>인기</option>
                </select>
            </div>
        </div>
        <div className="w-full flex flex-col items-center mt-5 overflow-x-hidden md:overflow-scroll md:section pr-2">
            <table className="min-w-full leading-normal rounded-md overflow-hidden table-fixed">
                <thead >
                    <tr>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            User
                        </th>
                        <th colSpan="3" scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Title
                        </th>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Created at
                        </th>
                        <th  scope="col" className="hidden md:table-cell px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <a href="#" className="block relative">
                                        <img alt="profil" src={cover01} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        Jean marc
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td colSpan="3" className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                            <p className="text-gray-900 whitespace-no-wrap truncate">
                                제로부터 시작하는 개발일지v
                            </p>
                        </td>
                        <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                                12/09/2020
                            </p>
                        </td>
                        <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full">
                                </span>
                                <span className="relative">
                                    active
                                </span>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="px-5 py-5 flex flex-col xs:flex-row items-center xs:justify-between">
            <div className="flex items-center">
                <button type="button" className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
                    <svg width="9" fill="currentColor" height="8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
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
                    <svg width="9" fill="currentColor" height="8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </React.Fragment>
    )
}
export default Posts;