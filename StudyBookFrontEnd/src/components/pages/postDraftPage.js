import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from '@toast-ui/react-editor';
import DefaultLayout from '../layouts/defaultLayout';

function PostDraftPage(){
    return(
    <DefaultLayout>
        <div className="flex flex-col">
            <input 
                className="font-noto-bold text-black text-3xl rounded-t-sm border-b-0 outline-none p-3"
                placeholder="게시물의 제목을 적어주세요 🍭"
            />
            <input 
                className="font-noto-bold text-black text-md rounded-t-sm border-t-0 outline-none p-3"
                placeholder="태그를 입력해주세요."
            />
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
        <Editor
            plugins={
                [codeSyntaxHighlight]
            }
            // initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            // ref={editorRef}
        />
        <div className="w-full flex justify-center my-5">
            <button className="w-60 p-3 bg-indigo-400 text-white font-noto-black text-2xl">발행</button>
        </div>
    </DefaultLayout>
    );
}
export default PostDraftPage;