import { Link, withRouter } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import { useEffect, useState } from "react";
import { apiScaffold } from "../../api";
import coverImg from "../../images/StudyBook.svg";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';

function PostDetailPage({ location }){

    const [detail, setDetail] = useState({
        id:1,
        title:"",
        user:{
            nickname:"",
            profile:""
        },
        publishedAt:"",
        content:"",
        reviews:[
    
        ]
    });

    // const dispatch = useDispatch();
    // const detailState = useSelector(s=>s.postDetail);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const res = await apiScaffold({
            "METHOD":"GET",
            "URL":`/api/posts/${location.pathname.split("/posts/")[1]}`
        });
        console.log(res);
        setDetail(res.post);
        // dispatch({type:"SET_POST_DETAIL", payload: {...res.post}});

        new Viewer({
            el: document.querySelector('#viewer'),
            // height: '600px',
            initialValue: res.post.content
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
    <PostDetailChild
        title={detail.title}
        // content={detail.content}
        publishedAt={detail.publishedAt}
        nickname={detail.user.nickname}
        profile={detail.user.profile ? detail.user.profile : coverImg}
    />
    );
}
export default withRouter(PostDetailPage);

function PostDetailChild({ title, publishedAt, nickname, profile }){
    return(
    <DefaultLayout>
        <div className="w-10/12">
            <div className="w-full font-noto-black text-5xl text-black leading-tight flex justify-center">{title}</div>
            <div className="flex justify-center items-center my-10">
                <Link to="/users/1" className="w-16 h-16 flex justify-center items-center border rounded-full mr-3">
                    <img src={profile} alt="img" className="rounded-full w-12 h-12"/>
                </Link>
                <div className="flex items-center">
                    <div className="flex flex-col items-start  mr-5">
                        <div className="font-pacifico text-gray-600">written by</div>
                        <Link to="/users/1"  className="font-noto-bold text-lg text-gray-700">{nickname}</Link>
                    </div>
                    <div className="flex flex-col items-start ">
                        <div className="font-pacifico text-gray-600">posted on</div>
                        <div className="font-noto-bold text-lg text-gray-700">{publishedAt}</div>
                    </div>
                </div>
            </div>
            <div id="viewer" className="font-noto-light"></div>
        </div>
    </DefaultLayout>
    )
}