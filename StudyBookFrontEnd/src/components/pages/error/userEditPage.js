import DefaultLayout from "../../layouts/defaultLayout";
import profileImg from "../../../images/StudyBook.svg";
import { useState } from "react";

function UserEditPage(){
    const [userInfo, setUserInfo] = useState({
        profile: null,
        nickname: null,
        info: null
    });

    const withdrawalButtonClick = () => {
        const result = prompt("탈퇴 하려면 'DELETE' 를 입력해주세요.");
        if(result === "DELETE"){
            alert("회원이 성공적으로 탈퇴되었습니다.");
        }
    }
    
    const imageChangeButtonClick = e => {

        const file = e.target.files[0];
        const fileName = file.name;
        // const upperfileName = fileName.toUpperCase();


        if(/(\.gif|\.jpg|\.jpeg|\.png)$/i.test(fileName) === false){
            return alert("이미지 파일을 선택해주세요");
        }
        
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            setUserInfo({...userInfo, profile: e.target.result});
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(e.target.files[0])
    }

    return(
    <DefaultLayout>
        <div className="w-full flex flex-col items-center">
            <div className="font-noto-black text-3xl text-black">회원정보 수정</div>
            <div className="w-8/12 flex mt-10 border-b pb-5">
                <div className="w-1/2  flex flex-col items-center">
                    <div className="w-24 h-24 flex justify-center items-center border rounded-full">
                        <img src={userInfo.profile ? userInfo.profile : profileImg} alt="img" className="w-20 h-20 rounded-full"/>
                    </div>
                    <button className="w-8/12 px-5 py-2 bg-blue-600 rounded-sm text-white font-noto-bold mt-3">
                        <input type="file" onChange={imageChangeButtonClick}/>
                    </button>
                    <button className="text-blue-600 font-noto-bold mt-3">이미지 제거</button>
                </div>
                <div className="mr-5 border-l"></div>
                <div className="w-1/2 flex flex-col justify-start">
                    <label className="font-noto-medium text-lg">닉네임</label>
                    <input className="w-full border rounded-sm p-1"/>
                    <br/>
                    <label className="font-noto-medium text-lg">소개</label>
                    <textarea className="p-2 border rounded-sm"></textarea>
                </div>
            </div>
            <div className="w-8/12 flex justify-end">
                <button className="p-2 font-noto-bold text-xl text-red-400" onClick={withdrawalButtonClick}>회원탈퇴</button>
            </div>
            <div className="w-8/12 flex justify-center mt-5 mb-16">
                <button 
                    className="p-3 px-10 bg-gradient-to-r bg-gray-600 text-white font-noto-bold text-2xl rounded-sm mt-10 mr-10"
                >
                    취소
                </button>
                <button 
                    className="p-3 px-10 bg-gradient-to-r bg-blue-600 text-white font-noto-bold text-2xl rounded-sm mt-10"
                >
                    수정
                </button>
            </div>
        </div>
    </DefaultLayout>
    );
}
export default UserEditPage;