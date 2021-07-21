import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function PostCreate(){
  return(
  <div className="w-full">
    <br/>
    <br/>
    <input 
      className="font-noto-black outline-none text-5xl text-black"
      placeholder="New Post title here..."
    />
    <br/>
    <br/>
    <CKEditor
      editor={ ClassicEditor }
      data="<p>Hello from CKEditor 5!</p>"
      config={{
          "toolbar":['undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'code', 'codeBlock' ]
        }}
      onReady={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
      } }
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
      } }
      onBlur={ ( event, editor ) => {
          console.log( 'Blur.', editor );
      } }
      onFocus={ ( event, editor ) => {
          console.log( 'Focus.', editor );
      } }
  />
  </div>
  );
}