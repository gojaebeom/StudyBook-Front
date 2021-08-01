import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DefaultLayout from "../../components/layouts/DefaultLayout";

import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';


export default function PostCreate(){

  const dispatch = useDispatch();

  const [post, setPost] = useState({
    id:1,
    title: "",
    profileImg: "",
    nickname: "",
    publishedAt: "",
    content: ""
  });

  useEffect(() => {
    new Editor({
      el: document.querySelector('#editor'),
      height: '600px',
      initialEditType: 'wysiwyg',
      previewStyle: 'vertical'
    });
  },[]);

  const createButtonHandler = () => {
    dispatch({ type: "PUSH_POST", payload: post });
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
        <div id="editor"></div>
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