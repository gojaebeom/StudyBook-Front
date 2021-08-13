import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import DefaultLayout from '../layouts/defaultLayout';
import { useRef, useState } from 'react';
import { apiScaffold } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import ValidationRedirector from "../global/validationRedirector";
import { withRouter } from 'react-router-dom';

function PostDraftPage({ history }){

    const [store, setStore] = useState({
        writerId: "",
        title: "",
        tagString:"",
        tags: [],
        content: "",
        publish: false
    });

    const loginState = useSelector(s => s.login);
    const dispatch = useDispatch();
    const editorRef = useRef();

    const titleHandler = (e) => {
        const { value } = e.target;
        setStore({...store, title: value});
    }


    const tagKeyEventHandler = (e) => {
        const { value } = e.target;
        const code = e.code;

        if(value === "" && code === "Backspace"){
            const prevTags = store.tags;
            const lastIndex = prevTags.length-1;
            const newTags = prevTags.filter((item, index) => {
                if(lastIndex !== index){
                    return item;
                }
                return null;
            })
            console.log(newTags);
            setStore({...store, tags: newTags });
        }

        if(code === "Space"){
            e.target.value = e.target.value.trim();
            dispatch({type: "SET_TOAST", payload: {
                type: "WARNING",
                content: "태그는 공백을 포함할 수 없습니다."
            }});
        }
        else if(value.includes(",")){
            const tag = value.split(",")[0];
            
            if(tag === "") {
                dispatch({type: "SET_TOAST", payload: {
                    type: "WARNING",
                    content: "태그가 입력되지 않았어요."
                }});
                e.target.value = "";
                return;
            }
            setStore({...store, tags: store.tags.concat(tag) });
            e.target.value = "";
        } 
    }
    const tagClickHandler = (e) => {
        const { value } = e.target;
        console.log(value);

        const prevTags = store.tags;
        const newTags = prevTags.filter((item, index) => {
            if(Number(value) !== index){
                return item;
            }
            return null;
        })

        setStore({...store, tags: newTags });
    }

    const postCreateButtonClickEvent = async ( ) => {
        const editorInstance = editorRef.current.getInstance();

        if(store.title === ""){
            dispatch({type: "SET_TOAST", payload:{
                type: "WARNING",
                content: "제목을 입력해주세요."
            }});
            return false;
        }
        if(store.tags === ""){
            dispatch({type: "SET_TOAST", payload:{
                type: "WARNING",
                content: "태그를 입력해주세요."
            }});
            return false;
        }
        if(editorInstance.getHTML() === ""){
            dispatch({type: "SET_TOAST", payload:{
                type: "WARNING",
                content: "내용을 입력해주세요."
            }});
            return false;
        }

        const formData = new FormData();
        formData.append("title", store.title);
        for(let tag of store.tags){
            formData.append("tags", tag);
        }
        formData.append("content", editorInstance.getHTML());
        formData.append("userId", loginState.userId);
        

        await apiScaffold({
            "METHOD":"POST",
            "URL":"/api/posts",
            "DATA":formData,
        });
        dispatch({type: "SET_TOAST", payload:{
            type: "SUCCESS",
            content: "글이 정상적으로 등록되었습니다."
        }});
        history.push("/");
    }

    return(
    <ValidationRedirector>
        <PostDraftChild
            store={store}
            titleHandler={titleHandler}
            tagClickHandler={tagClickHandler}
            tagKeyEventHandler={tagKeyEventHandler}
            editorRef={editorRef}
            postCreateButtonClickEvent={postCreateButtonClickEvent}
        />
    </ValidationRedirector>
    );
}
export default withRouter(PostDraftPage);

function PostDraftChild({ titleHandler, store, tagClickHandler, tagKeyEventHandler, editorRef, postCreateButtonClickEvent}){
    return(
    <DefaultLayout>
        <div className="w-full flex flex-col">
            <input
                className="font-noto-bold text-black text-3xl rounded-t-sm border-b-0 outline-none p-3"
                placeholder="게시물의 제목을 적어주세요 🍭"
                onKeyUp={titleHandler}
                name="title"
            />
            <div className="flex items-center">
                {
                    store.tags.map((item, index) => {
                        return(
                        <div key={index} className="font-noto-thin text-xs rounded-sm  mr-2 flex items-center">
                            <span className="p-1 bg-gray-100">{item}</span>
                            <button
                                className="p-1 px-2 bg-gray-300"
                                value={index}
                                onClick={tagClickHandler}
                            >
                                X
                            </button>
                        </div>
                        );
                    })
                }
                
                <input 
                    className="font-noto-bold text-black text-md rounded-t-sm border-t-0 outline-none p-3"
                    placeholder="태그를 쉼표로 구분하여 입력"
                    onKeyUp={tagKeyEventHandler}
                    name="tagString"
                />
            </div>
        </div>
        <div className="w-full flex items-center justify-end mb-2">
            <button 
                title="게시글 작성규칙 보기"
                className="font-noto-bold text-xl bg-gray-50 rounded-sm p-2"
                onClick={() => {
                    alert(
                        "제목: 10 글자 이상 ~ 30 글자 이하\n"+
                        "태그: 1개 이상, 3개 이하로 등록 가능\n"+
                        "공백, 특수문자 사용 불가, 2 글자 이상 ~ 10 글자 이하\n"+
                        "한 게시물당 동일한 태그명 작성불가\n"+
                        "내용: 50글자 이상 작성"
                    );
                }}
            >
                <i className="fas fa-book mr-2 text-gray-500"></i>
                <span className="text-gray-700">게시물 작성 규칙 보기</span>
            </button>
        </div>
        <div className="w-full">
            <Editor
                plugins={
                    [codeSyntaxHighlight]
                }
                // initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg" // markdown or wysiwyg
                useCommandShortcut={true}
                ref={editorRef}
            />
        </div>
        <div className="w-full flex justify-center mt-5 mb-16">
            <button 
                className="p-3 px-10 bg-gradient-to-r from-green-400 to-blue-500 border text-white font-noto-bold text-2xl rounded-sm"
                onClick={postCreateButtonClickEvent}
            >
                게시하기
            </button>
        </div>
    </DefaultLayout>
    )
}