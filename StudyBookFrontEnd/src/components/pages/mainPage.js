import DefaultLayout from "../layouts/defaultLayout";
import { useEffect, useState } from "react";
import { apiScaffold } from "../../api";
import Pagination from "../widgets/pagination";
import Filter from "../widgets/filter";
import { Card, LongCard } from "../widgets/card";

function MainPage(){
    const [posts, setPosts] = useState({
        total: 0,
        sortType: "",
        posts: [
            {
                id:1,
                user: {
                    profile:"",
                    nickname:"",
                },
                title:"",
                publishedAt:"",
                content:"",
                tags:[]
            },
        ]
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await apiScaffold({
            "METHOD": "GET",
            "URL":"/api/posts"
        });
        console.log(res);

        setPosts({
            ...posts,
            posts: res.posts
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
    <MainPageChild
        items={posts.posts}
    />
    );
}
export default MainPage;

function MainPageChild({ items }){
    return(
    <DefaultLayout>

        <Filter />

        <div className="w-full grid grid-flow-col md:grid-flow-row md:grid-cols-3 md:grid-rows-3 md:gap-4 mb-10">
            {
                items.length !== 0 ?
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
                }) :
                <div>게시물이 없습니다 😥</div>
            }
        </div>

        <Pagination />

    </DefaultLayout>
    )
}