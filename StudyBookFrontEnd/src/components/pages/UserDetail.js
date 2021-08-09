import DefaultLayout from "../layouts/DefaultLayout";
import React, {useEffect} from "react";
import {apiScaffold} from "../../api";
import { withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ProfileImg from "../../images/StudyBook.svg";
import PostListItem from "../PostListItem";
import PostList from "../PostList";

function UserDetail({ location }) {

    const detailState = useSelector(s => s.userDetail);
    const dispatch = useDispatch();

    useEffect(async () => {
        const res = await apiScaffold({
            METHOD:"GET",
            URL:`/api/users/${location.pathname.split("/users/")[1]}`
        });
        dispatch({ type: "SET_USER_DETAIL", payload:{...res.user, profile:res.user.profile? res.user.profile :ProfileImg, posts:res.posts}});
        console.log(res);
    },[ ]);
    return (
        <DefaultLayout
            main={
            <div className={`w-full flex flex-col item-center`}>
                <div className={`relative w-full h-20 bg-indigo-100 flex justify-center items-center mt-5 mb-16 rounded-md`}>
                    <div className={`absolute -bottom-16 flex flex-col justify-center items-center`}>
                        <div className={`border-4 border-white rounded-full`}>
                            <img src={detailState.profile} className={`w-20 h-20 rounded-full`}/>
                        </div>
                        <div className={`font-noto-bold text-2xl`}>{detailState.nickname}</div>
                    </div>
                </div>
                <div>
                    <PostList>
                        {
                            detailState.posts.length > 0 ?
                                detailState.posts.map((item, index) => {
                                    if (index % 2 === 0)
                                        return (
                                            <PostListItem
                                                key={item.id}
                                                item={item}
                                                qouteColor="group-hover:text-green-300 text-green-100"
                                                titleColor="from-green-400 to-blue-500"
                                                profileBorderColor="border-green-300"
                                                detailMode
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
                                                detailMode
                                            />
                                        )
                                }) : <div>글이 존재하지 않아요</div>
                        }
                    </PostList>
                </div>
            </div>
            }
        />
    )
}
export default withRouter(UserDetail);