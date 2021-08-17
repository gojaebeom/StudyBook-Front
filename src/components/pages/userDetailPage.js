import DefaultLayout from "../layouts/defaultLayout";
import img from "../../images/StudyBook.svg";
import { Link, withRouter } from "react-router-dom";
import Pagination from "../widgets/pagination";
import Filter from "../widgets/filter";
import { Card, LongCard } from "../widgets/card";
import { useEffect, useState } from "react";
import { apiScaffold } from "../../api";

function UserDetailPage({ location }){

    const [ detail, setDetail ] = useState({
        id:"",
        nickname:"",
        profile:"",
        info:"",
        posts:[]
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const res = await apiScaffold({
            "METHOD": "GET",
            "URL": `/api/users/${location.pathname.split("/users/")[1]}`
        });

        setDetail({
            id: res.user.id,
            nickname: res.user.nickname,
            profile: res.user.profile,
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
export default withRouter(UserDetailPage);

function UserDetailChild({ nickname, profile, info, items }){
    return(
    <DefaultLayout>
        <div className="w-full">
            <div className="w-full bg-gray-50 flex justify-center items-start p-5 rounded-md mb-10">
                <div className="block relative w-20 h-20 mr-5">
                    <img alt="profil" src={img} className="mx-auto object-cover rounded-full h-20 w-20 "/>
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
        
        <Filter />

        <div className="w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4 mb-10">
            {
                items.map((item, index) => {
                    if(index === 0){
                        return(
                        <LongCard
                            key={item.id}
                            id={item.id}
                            userId={item.user.id}
                            nickname={item.user.nickname}
                            profile={item.user.profile}
                            title={item.title}
                            tags={item.tags}
                        />
                        )
                    }
                    return(
                    <Card 
                        key={item.id}
                        id={item.id}
                        userId={item.user.id}
                        nickname={item.user.nickname}
                        profile={item.user.profile}
                        title={item.title}
                        tags={item.tags}
                    />
                    )
                })
            }
        </div>
    
        <Pagination />
    </DefaultLayout>
    )
}