import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function PostCreate(){

  const dispatch = useDispatch();

  const [post, setPost] = useState(    {
    id:1,
    title: "",
    profileImg: "",
    nickname: "",
    publishedAt: "",
    content: ""
  },);

  const createButtonHandler = () => {
    dispatch({ type: "PUSH_POST", payload: post });
  }

  return(
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
    <CKEditor
      editor={ ClassicEditor }
      config={{
          "toolbar":{
            items: [
              'heading', '|',
              'alignment', '|',
              'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
              'link', '|',
              'bulletedList', 'numberedList', 'todoList'
            ],
            shouldNotGroupWhenFull: true
          }
        }}
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          setPost({...post, content: data});
      } }
    />
    <br/>
    <button
      onClick={createButtonHandler} 
      className="border-none rounded-lg bg-blue-500 w-full h-12 font-noto-regular text-lg text-white">
      생성
    </button>

  </div>
  );
}