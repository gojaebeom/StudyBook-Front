import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import DefaultLayout from '../layouts/defaultLayout';
import { useRef } from 'react';
import { apiScaffold } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import ValidationRedirector from "../global/validationRedirector";
import { withRouter } from 'react-router-dom';

function PostDraftPage({ location, history }){

    const postCreateState = useSelector(s => s.postCreate);
    const loginState = useSelector(s => s.login);
    const dispatch = useDispatch();
    const editorRef = useRef();

    const titleHandler = (e) => {
        const { value } = e.target;
        dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, title: value}});
    }


    const tagKeyEventHandler = (e) => {
        const { value } = e.target;
        const code = e.code;

        if(value === "" && code === "Backspace"){
            const prevTags = postCreateState.tags;
            const lastIndex = prevTags.length-1;
            const newTags = prevTags.filter((item, index) => {
                if(lastIndex !== index){
                    return item;
                }
                return null;
            })
            console.log(newTags);
            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, tags: newTags }});
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

            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, tags: postCreateState.tags.concat(tag) }});
            e.target.value = "";
        } 
    }
    const tagClickHandler = (e) => {
        const { value } = e.target;
        console.log(value);

        const prevTags = postCreateState.tags;
        const newTags = prevTags.filter((item, index) => {
            if(Number(value) !== index){
                return item;
            }
            return null;
        })
        dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCreateState, tags: newTags }});
    }

    const postCreateButtonClickEvent = async ( ) => {
        const editorInstance = editorRef.current.getInstance();
        console.log(editorInstance.getHTML());

        const formData = new FormData();
        formData.append("title", postCreateState.title);
        for(let tag of postCreateState.tags){
            formData.append("tags", tag);
        }
        formData.append("content", editorInstance.getHTML());
        formData.append("userId", loginState.userId);
        

        await apiScaffold({
            "METHOD":"POST",
            "URL":"/api/posts",
            "DATA":formData,
        });
        dispatch({type: "POST_CREATE_INIT"});
        dispatch({type: "SET_TOAST", payload:{
            type: "SUCCESS",
            content: "글이 정상적으로 등록되었습니다."
        }});
        history.push("/");
    }

    return(
    <ValidationRedirector>
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
                        postCreateState.tags.map((item, index) => {
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
                        placeholder="태그를 입력해주세요."
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
            <div className="w-full flex justify-center my-5">
                <button 
                    className="w-60 p-3 bg-indigo-400 text-white font-noto-black text-2xl"
                    onClick={postCreateButtonClickEvent}
                >
                    발행
                </button>
            </div>
        </DefaultLayout>
    </ValidationRedirector>
    );
}
export default withRouter(PostDraftPage);