import profileImg from "../assets/images/StudyBook.svg";
import { useState } from "react";
import { apiScaffold } from "../api";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useRef } from "react";


const UserEdit = ({ location }) => {

    const imgRef = useRef();
    
    const [user, setUser] = useState({
        profile: "",
        profileFile: null,
        nickname: "",
        info: ""
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( async () => {
        const act = jwtDecode(window.localStorage.getItem("act"));
        console.log(act);

        const res = await apiScaffold({
            "METHOD": "GET",
            "URL": `/api/users/${act.id}`
        });
        console.log(res);
        setUser({
            ...user,
            id: res.user.id,
            nickname: res.user.nickname,
            profile: res.user.profile,
            info: res.user.info
        });

        console.log(user);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const withdrawalButtonClick = () => {
        const result = prompt("탈퇴 하려면 'DELETE' 를 입력해주세요.");
        if(result === "DELETE"){
            alert("회원이 성공적으로 탈퇴되었습니다.");
        }
    }

    const imgDeleteButtonClick = () => {
        imgRef.current.value = "";
        setUser({...user, profile:"", profileFile:null});
    }

    const inputHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if(name === "nickname"){
            setUser({...user, nickname : value});
        }
        else if(name === "info"){
            setUser({...user, info : value});
        }
    }
    
    const imageChangeButtonClick = e => {
        if(e.target.files.length === 0){
            e.target.value = "";
            return false;
        }
        const file = e.target.files[0];
        const fileName = file.name;

        if(/(\.gif|\.jpg|\.jpeg|\.png)$/i.test(fileName) === false){
            e.target.value = "";
            return alert("이미지 파일을 선택해주세요");
        }
        
        // FileReader 인스턴스 생성
        const reader = new FileReader()
        // 이미지가 로드가 된 경우
        reader.onload = e => {
            setUser({...user, profile:e.target.result, profileFile: file});
        }
        // reader가 이미지 읽도록 하기
        reader.readAsDataURL(e.target.files[0])
    }

    const submmitHandler = () => {
        console.log(user);
    } 

    return(
    <div className="w-full flex flex-col items-center">
        <div className="font-noto-black text-3xl text-black">회원정보 수정</div>
        <div className="w-8/12 flex mt-10 border-b pb-5">
            <div className="w-1/2  flex flex-col items-center">
                <div className="w-24 h-24 flex justify-center items-center border rounded-full">
                    <img 
                        src={user.profile ? user.profile : profileImg} 
                        alt="img" 
                        className="w-20 h-20 rounded-full" 
                    />
                </div>
                <button className="w-8/12 px-5 py-2 bg-gradient-to-r rounded-sm text-white font-noto-bold mt-3">
                    <input 
                        type="file" 
                        onChange={imageChangeButtonClick}
                        ref={imgRef}
                    />
                </button>
                <button className="text-blue-600 font-noto-bold mt-3"
                    onClick={imgDeleteButtonClick}    
                >이미지 제거
                </button>
            </div>
            <div className="mr-5 border-l"></div>
            <div className="w-1/2 flex flex-col justify-start">
                <label className="font-noto-medium text-lg">닉네임</label>
                <input className="w-full border rounded-sm p-1" 
                    name="nickname" 
                    value={user.nickname} 
                    onChange={inputHandler}
                />
                <br/>
                <label className="font-noto-medium text-lg">소개</label>
                <textarea 
                    className="p-2 border rounded-sm" 
                    name="info" 
                    value={user.info ? user.info : "반가워요 🖐"} 
                    onChange={inputHandler}>
                </textarea>
            </div>
        </div>
        <div className="w-8/12 flex justify-end">
            <button className="p-2 font-noto-bold text-xl text-red-400" onClick={withdrawalButtonClick}>회원탈퇴</button>
        </div>
        <div className="w-8/12 flex justify-center mt-5 mb-16">
            <button 
                className="p-3 px-10 bg-gray-300  text-white font-noto-bold text-2xl rounded-sm mt-10 mr-10"
            >
                취소
            </button>
            <button 
                onClick={submmitHandler}
                className="p-3 px-10 bg-indigo-300 text-white font-noto-bold text-2xl rounded-sm mt-10"
            >
                수정
            </button>
        </div>
    </div>
    );
}
export default withRouter(UserEdit);