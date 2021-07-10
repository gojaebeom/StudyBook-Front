import React from "react";
import { Link } from "react-router-dom";

export default function JoinForm() {
    return (
    <React.Fragment>
        <form className="sign-form">
            <div className="position-container">
                <legend className="title">계정 만들기</legend>
                <div className="form-items-container">
                    <label htmlFor="email">이메일</label>
                    <input id="email" />
                </div>
                <div className="form-items-container">
                    <label htmlFor="password">닉네임</label>
                    <input id="password" />
                </div>
                <div className="form-items-container">
                    <label htmlFor="password">비밀번호</label>
                    <input id="password" />
                </div>
                <div className="form-items-container">
                    <button>계속하기</button>
                    <span>
                        <Link to="/login">이미 계정이 있으신가요?</Link>
                    </span>
                </div>
            </div>
        </form>
    </React.Fragment>
    );
}