import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import DefaultLayout from "../../components/layouts/DefaultLayout";
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';


export default function PostCreate(){

  const editorRef = useRef();

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const createButtonHandler = () => {
    const content = editorRef.current.getRootElement().querySelector(".toastui-editor-contents").outerHTML;
  }

  return(
  <DefaultLayout
    main={
      <div className="w-full">
        <br/>
        <br/>
        <input 
          className="font-noto-black outline-none text-5xl text-black"
          placeholder="New Post title here..."
          onChange={ (e) => {
            setPost({...post, title: e.target.value });
          } }
        />
        <br/>
        <br/>
        <Editor
          plugins={
            [codeSyntaxHighlight]
          }
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={editorRef}
        />
        <br/>
        <button
          onClick={createButtonHandler} 
          className="border-none rounded-sm bg-blue-500 w-full h-12 font-noto-regular text-lg text-white">
          생성
        </button>
      </div>
    }
  />
  );
}