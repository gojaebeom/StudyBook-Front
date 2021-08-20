import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/images/StudyBook.svg";
import Pagination from "../components/Pagination";
import { apiScaffold } from "../api";



const Posts = () => {

    const [postState, setPostState] = useState({
        total: 0,
        page:1,
        sort: "recent", // recent | old | views
        search: "",
        isWait: false,
        posts: [
            {
                id:1,
                user: {
                    profilePreview:"",
                    nickname:"",
                },
                title:"",
                publishedAt:"",
                content:"",
                views: 0,
                tags:[]
            },
        ]
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await apiScaffold({
            "METHOD": "GET",
            "URL":`/api/posts?page=${postState.page}&sort=${postState.sort}`
        });
        
        if(res.status === 500){
            return alert(res.message);
        }

        console.log(res);

        setPostState({
            ...postState,
            posts: res.posts
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    let timer;
    const searchHandler = (e) => {
        if(timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            console.log(e.target.value);
        }, 500);
    }

    const sortHandler = (e) => {
        const value = e.target.value;
        console.log(value);
        if(value === "recent") setPostState({...postState, sort: "recent"});
        else if(value === "old") setPostState({...postState, sort: "old"});
        else if(value === "views") setPostState({...postState, sort: "views"});
    }

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
                    value={postState.sort}
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
                        postState.isWait ? <tr><td colSpan="5">데이터를 검색중입니다..</td></tr> 
                        
                        :postState.posts.map(e=> {
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
                                    <p className="text-gray-900 whitespace-no-wrap truncate">
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
                                            { e.views }
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            )
                        })
                        
                    }
                </tbody>
            </table>
        </div>
       
        <Pagination />
    </React.Fragment>
    )
}
export default Posts;