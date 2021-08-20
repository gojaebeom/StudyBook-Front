import defaultImg from "../assets/images/StudyBook.svg";
import { Link, withRouter } from "react-router-dom";
import Pagination from "../components/Pagination";
import React, { useEffect, useState } from "react";
import { apiScaffold } from "../api";
import jwtDecode from "jwt-decode";

const UserDetail = ({ location }) => {

    const [ detail, setDetail ] = useState({
        id:"",
        nickname:"",
        profile:"",
        info:"",
        posts:[]
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {

        const act = jwtDecode(window.localStorage.getItem("act"));
        console.log(act);

        const res = await apiScaffold({
            "METHOD": "GET",
            "URL": `/api/users/${act.id}?type=detail`
        });

        if(res.status === 500){
            return alert("서버요청이 정상적으로 처리되지 않았습니다.");
        }

        console.log(res);
        setDetail({
            id: res.user.id,
            nickname: res.user.nickname,
            profile: res.user.profilePreview? "/images/"+res.user.profilePreview : "",
            info: res.user.info,
            posts: res.posts
        });
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
    <UserDetailChild
        id={detail.id}
        nickname={detail.nickname}
        profile={detail.profile}
        info={detail.info}
        items={detail.posts}
    />
    );
}
export default withRouter(UserDetail);

const UserDetailChild = ({ nickname, profile, info, items }) => {
    return(
    <React.Fragment>
        <div className="w-full">
            <div className="w-full bg-gray-50 flex justify-center items-start p-5 rounded-md mb-10">
                <div className="block relative w-20 h-20 mr-5">
                    <img alt="profil" src={profile? profile: defaultImg} className="mx-auto object-cover rounded-full h-20 w-20 "/>
                </div>
                <div className="block relative w-10/12">
                    <div className="font-noto-black text-3xl text-black">{nickname}</div>
                    <div className="font-noto-light text-md mt-2">{info? info: "반가워요 🖐"}</div>
                </div>
            </div>
        </div>
        <div id="filter" className="w-full mb-5 flex flex-wrap">
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">전체</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">12</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">자바스크립트</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">2</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">자바</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">10</div>
            </Link>
            <Link to="/tags/name" className="flex mr-2">
                <div className="w-auto font-noto-thin text-xs p-1 rounded-l-sm bg-gray-100">알고리즘</div>
                <div className="w-auto font-noto-thin text-xs p-1 rounded-r-sm bg-gray-200">5</div>
            </Link>
        </div>
        <div className="w-full flex flex-col items-center mt-5 overflow-x-hidden md:overflow-y-auto md:section pr-2">
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
                    {
                        items.map(e => {
                            return(
                            <tr key={e.id}>
                                <td className="hidden md:table-cell px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <Link to="/" className="block relative">
                                                <img alt="profil" src={e.user.profilePreview? "/images/"+e.user.profilePreview : defaultImg} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </Link>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                { e.user.nickname }
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td colSpan="3" className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                                    <p className="text-gray-900 whitespace-no-wrap truncate">
                                        { e.title }
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
                                            active
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