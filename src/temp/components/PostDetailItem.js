import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import React, {useEffect} from 'react';
import {apiScaffold} from "../../api";
import {Link, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CoverImg from "../../images/StudyBook.svg";


function PostDetailItem({location}) {

    const dispatch = useDispatch();
    const item = useSelector(state => state.postDetail);

    useEffect(async () => {
        const res = await apiScaffold({
            METHOD: "GET",
            URL: `/api/posts/${location.pathname.split("/posts/")[1]}`
        });
        console.log(res);

        dispatch({type: "SET_POST_DETAIL", payload: res.post})

        new Viewer({
            el: document.querySelector('#viewer'),
            // height: '600px',
            initialValue: res.post.content
        });

    }, []);

    return (
        <div className="w-full flex flex-col items-center">
            <div className="group relative w-full p-6 ">
                <i className={`fas fa-quote-left text-gray-100 text-5xl  transition-all`}></i>
                <h1 className={`font-noto-black text-4xl text-gray-600 mb-3`}>
                    {item.title}
                </h1>
                <div className="flex justify-start items-center mb-3">
                    {/* 프로필 이미지 */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-dotted flex justify-center items-center
          mr-3 hover:border-purple-300 transition-all cursor-pointer">
                        <img className="w-11 h-11 rounded-full"
                             src={item.profile ? item.profile : CoverImg} alt="cover img"/>
                    </div>
                    <div className="flex flex-col font-noto-medium text-2xl ">
                        <div className="font-noto-medium text-black text-2xl">
                            {item.user.nickname}
                        </div>
                        <div className="font-noto-regular text-lg text-gray-500">
                            {item.publishedAt}
                        </div>
                    </div>
                </div>
                <div className="font-noto-regular text-xl text-gray-600 ">
                    <div id="viewer" className="font-noto-light"></div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(PostDetailItem);