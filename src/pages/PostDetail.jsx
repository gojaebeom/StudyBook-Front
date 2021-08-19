import { Link, withRouter } from "react-router-dom";
import coverImg from "../assets/images/StudyBook.svg";
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { useEffect, useState } from 'react';
import { apiScaffold } from '../api';
import { useSelector } from "react-redux";

const PostDetail = ({ location }) => {

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


    const bgState = useSelector(s=>s.bgColor);

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

    let titleColor = "text-black";
    if(bgState.id === 1){
        titleColor = "bg-gradient-to-br from-blue-400 to-green-400 bg-clip-text text-transparent";
    }
    else if(bgState.id === 2){
        titleColor = "bg-gradient-to-br from-yellow-400 via-red-300 to-pink-300 bg-clip-text text-transparent";
    }
    else if(bgState.id === 3){
        titleColor = "bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent";
    }
    else if(bgState.id === 5){
        titleColor = "bg-gradient-to-br from-gray-700 to-gray-500 bg-clip-text text-transparent";
    }

    return(
    <div className="w-full px-5">
        <div className={`w-full font-noto-black text-5xl ${ titleColor }  leading-tight flex justify-center`}>{detail.title}</div>
        <div className="flex justify-center items-center my-10">
            <Link to="/users/1" className="w-16 h-16 flex justify-center items-center border rounded-full mr-3">
                <img src={detail.profile ? detail.profile : coverImg} alt="img" className="rounded-full w-12 h-12"/>
            </Link>
            <div className="flex items-center">
                <div className="flex flex-col items-start  mr-5">
                    <div className="font-pacifico text-gray-600">written by</div>
                    <Link to="/users/1"  className="font-noto-bold text-lg text-gray-700">{detail.user.nickname}</Link>
                </div>
                <div className="flex flex-col items-start ">
                    <div className="font-pacifico text-gray-600">posted on</div>
                    <div className="font-noto-bold text-lg text-gray-700">{detail.publishedAt}</div>
                </div>
            </div>
        </div>
        <div id="viewer" className="font-noto-light flex justify-center"></div>
    </div>
    )
}
export default withRouter(PostDetail);