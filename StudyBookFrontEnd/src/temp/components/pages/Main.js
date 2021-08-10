import PostFilter from "../PostFilter";
import PostListItem from "../PostListItem";

import PostList from "../PostList";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import TopTagList from "../TopTagList";
import axios from "axios";
import {apiScaffold} from "../../../api";


export default function Main() {

    const postsState = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(async () => {
        const res = await apiScaffold({
            METHOD:"GET",
            URL:"/api/posts",
        });
        console.log(res.posts);
        dispatch({type:"INIT_POSTS", payload: {posts: res.posts, total: res.posts.length}});
    }, [ ]);

    return (
        <DefaultLayout
            border
            left={
                <PostFilter/>
            }
            main={
                <PostList>
                    {
                        postsState.total > 0 ?
                        postsState.posts.map((item, index) => {
                            if (index % 2 === 0)
                                return (
                                    <PostListItem
                                        key={item.id}
                                        item={item}
                                        qouteColor="group-hover:text-green-300 text-green-100"
                                        titleColor="from-green-400 to-blue-500"
                                        profileBorderColor="border-green-300"
                                    />
                                )
                            else
                                return (
                                    <PostListItem
                                        key={item.id}
                                        item={item}
                                        qouteColor="group-hover:text-purple-300 text-purple-100"
                                        titleColor="from-purple-400 via-pink-500 to-red-500"
                                        profileBorderColor="border-purple-300"
                                    />
                                )
                        }) : <div>글이 존재하지 않아요</div>
                    }

                </PostList>
            }
            right={
                <TopTagList/>
            }
        />
    );
}