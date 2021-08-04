import axios from "axios";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function PostCreateModal() {

    const [isNew, setIsNew] = useState(false);

    const dispatch = useDispatch();
    const postCrateState = useSelector(state => state.postCreate);
    const loginState = useSelector(state => state.login);

    const changeInputHandler = (e) => {
        let value = e.target.value;
        const name = e.target.name;
        console.log(value);
        if (name === "description") {
            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, description: value}});
        } else if (name === "isPublic") {
            dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, isPublic: value}});
        } else if (name === "category") {
            if (value === "1") {
                dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, category: ""}});
            } else if (value === "2") {
                setIsNew(true);
            } else {
                dispatch({type: "POST_CREATE_STATE_CHANGE", payload: {...postCrateState, category: value}});
            }
        }
    }

    // 👊👊👊
    const submitButtonHandler = async () => {
        const formData = new FormData();
        formData.append("title", postCrateState.title);
        formData.append("content", postCrateState.content);
        for (let tag of postCrateState.tags) {
            formData.append("tags", tag);
        }
        formData.append("description", postCrateState.description);
        formData.append("category", postCrateState.category);
        formData.append("userId", loginState.userId);

        const res = await axios({
            method: "post",
            url: "/api/posts",
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
                "Access-Control-Allow-Headers":"Content-Type, Authorization",
                "Authorization":`bearer ${window.localStorage.getItem("act")}`,
                "content-Type": "multipart/form-data",
            },
            data: formData,
        })
            .then(data => data.data)
            .catch(err => {
                const {message, status} = err.response.data;
                alert(`CODE: ${status}\n${message}`);
                throw new Error(message);
            });

        console.log(res);

    }

    const closeButtonHandler = () => {
        dispatch({type: "POST_CREATE_MODAL_TOGGLE"});
    }

    return (
        <div className="w-full h-screen absolute left-0 top-0 bg-gray-50 z-50 flex justify-center items-center">
            <div className="w-11/12 lg:w-auto font-noto-light flex flex-col items-center">
                <p className="font-noto-medium text-4xl text-gray-700 mb-5">업로드 체크하기</p>
                <div className="flex flex-col text-gray-700 w-72 mb-2">
                    <label>* 설명</label>
                    <textarea onChange={changeInputHandler} name="description" className="p-2 border w-full"
                              placeholder="당신의 포스트를 짧게 설명해주세요"></textarea>
                </div>
                <div className="flex flex-col text-gray-700 w-72 mb-2">
                    <label>* 공개설정</label>
                    <select
                        name="isPublic"
                        onChange={changeInputHandler}
                        className="p-2 border w-full">
                        <option value={true}>전체</option>
                        <option value={false}>비공개</option>
                    </select>
                </div>
                <div className="flex flex-col text-gray-700 w-72">
                    <label>* 카테고리 선택(필수)</label>
                    <select onChange={changeInputHandler} name="category" className="p-2 border w-full">
                        <option value="1">선택안함</option>
                        <option value="2">새로 만들기</option>
                        <option value="자바">자바</option>
                        <option value="자바스크립트">자바스크립트</option>
                        <option value="객체지향">객체지향</option>
                    </select>
                </div>
                {
                    isNew &&
                    <div className="flex flex-col text-gray-700 w-72">
                        <input className="border border-t-0 p-2" name="category" onChange={changeInputHandler}
                               placeholder="카테고리 이름"/>
                    </div>
                }
                <div className="flex flex-col text-gray-700 w-72 mt-5">
                    <button
                        onClick={submitButtonHandler}
                        className="border p-2 bg-indigo-500 text-white font-noto-medium">
                        업로드
                    </button>
                    <button
                        onClick={closeButtonHandler}
                        className="p-2 bg-none text-gray-700 font-noto-medium">
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}