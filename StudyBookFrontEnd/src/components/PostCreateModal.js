import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PostCreateModal(){

  const [isSelected, setIsSeleted] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const selectorHandler = (e) => {
    const value = e.target.value;
    console.log(value);

    if(value !== "1") setIsSeleted(true);
    else setIsSeleted(false);

    if(value === "2") setIsNew(true);
    else setIsNew(false);
  }

  const dispatch = useDispatch();

  const closeButtonHandler = () => {
    dispatch({type:"POST_CREATE_MODAL_TOGGLE"})
  }

  return(
  <div className="w-full h-screen absolute left-0 top-0 bg-gray-50 z-50 flex justify-center items-center">
    <div className="w-11/12 lg:w-auto font-noto-light flex flex-col items-center">
      <p className="font-noto-medium text-4xl text-gray-700 mb-5">업로드 체크하기</p>
      <div className="flex flex-col text-gray-700 w-72 mb-2">
        <label>* 설명</label>
        <textarea className="p-2 border w-full" placeholder="당신의 포스트를 짧게 설명해주세요"></textarea>
      </div>
      <div className="flex flex-col text-gray-700 w-72 mb-2">
        <label>* 공개설정</label>
        <select className="p-2 border w-full">
          <option value="PUBLIC">전체</option>
          <option value="SECRET">비공개</option>
        </select>
      </div>
      <div className="flex flex-col text-gray-700 w-72">
        <label>* 카테고리 선택(필수)</label>
        <select onChange={selectorHandler} className="p-2 border w-full">
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
          <input className="border border-t-0 p-2" placeholder="카테고리 이름"/>
        </div>
      }
      <div className="flex flex-col text-gray-700 w-72 mt-5">
        {
          isSelected ?
          <button className="border p-2 bg-indigo-500 text-white font-noto-medium">
            업로드
          </button> :
          <button className="border p-2 bg-gray-400 text-white font-noto-medium cursor-default">
            업로드
          </button>
        }
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