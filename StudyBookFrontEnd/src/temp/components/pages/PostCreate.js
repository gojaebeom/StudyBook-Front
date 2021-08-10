import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostCreateModal from '../PostCreateModal';

import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import {Link} from 'react-router-dom';


export default function PostCreate() {

    const editorRef = useRef();

    const dispatch = useDispatch();
    const postCrateState = useSelector(state => state.postCreate);

    const createButtonHandler = () => {
        const content = editorRef.current.getRootElement().querySelector(".toastui-editor-contents").outerHTML;

        dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, content: content}});
        dispatch({type: "POST_CREATE_MODAL_TOGGLE"});
    }

    const changeInputHandler = (e) => {
        let value = e.target.value;
        const name = e.target.name;
        console.log(value);
        if (name === "title") {
            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, title: value}});
        } else if (name === "tags") {
            const tags = value.split(",");
            console.log(tags);
            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, tags: tags}});
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center">
            {
                !postCrateState.open ?
                <div className="w-full lg:w-6/12">
                    <br/>
                    <br/>
                    <input
                        name="title"
                        className="w-full p-2 mb-5 font-noto-bold outline-none text-4xl text-gray-700"
                        placeholder="제목을 입력하세요"
                        onChange={changeInputHandler}
                    />
                    <input
                        name="tags"
                        className="w-full p-2 mb-5 font-noto-medium outline-none text-xl text-gray-500"
                        placeholder="태그( 쉼표로 구분 )"
                        onChange={changeInputHandler}
                    />
                    <Editor
                        plugins={
                            [codeSyntaxHighlight]
                        }
                        // initialValue="hello react editor world!"
                        previewStyle="vertical"
                        height="600px"
                        initialEditType="markdown"
                        useCommandShortcut={true}
                        ref={editorRef}
                    />
                    <br/>
                    <div className="w-full flex justify-end ">
                        <Link to="/"
                              className="border-none flex justify-center items-center rounded-sm bg-yellow-500 w-52 h-12 font-noto-regular text-lg text-white mr-5">취소</Link>
                        <button
                            onClick={createButtonHandler}
                            className="border-none rounded-sm bg-indigo-500 w-52 h-12 font-noto-regular text-lg text-white">
                            생성
                        </button>
                    </div>
                </div>
                :
                <PostCreateModal/>
            }
        </div>
    );
}