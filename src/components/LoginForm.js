import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
    <React.Fragment>
        <form className="sign-form">
            <div className="position-container">
                <legend className="title">돌아오신 것을 환영해요!</legend>
                <div className="form-items-container">
                    <label htmlFor="email">이메일</label>
                    <input id="email" />
                </div>
                <div className="form-items-container">
                    <label htmlFor="password">비밀번호</label>
                    <input id="password" />
                </div>
                <div className="form-items-container">
                    <button>로그인</button>
                    <span>
                        계정이 필요한가요?
                        <Link to="/join">가입하기</Link>
                    </span>
                    <span style={{marginTop:"10px"}}>
                        <Link to="/" style={{color:"#FAAC58"}}>로그인 없이 둘러보기</Link>
                    </span>
                </div>
            </div>
        </form>
    </React.Fragment>
    );
}