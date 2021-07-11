import React from "react";
import { Link } from "react-router-dom";
import ThumbnailImage from "../../../assets/cover.png";

export default function SummaryCard() {
    return (
    <div className="summary-card">
        {/* // eslint-disable-next-line jsx-a11y/heading-has-content */}
        <div className="title-profile-container">
            <Link to="posts/1" className="title">자바 - SOLID 원칙</Link>
            <div className="profile-container">
                <Link to="/users/1" className="profile-image">
                    <img className="image" src={ThumbnailImage} alt="profile"/>
                </Link>
                <Link to="/users/1" className="profile-name">고재범sadfdsaf</Link>
            </div>
        </div>
        <div className="thumbnail-container">
            <img className="image" src={ThumbnailImage} alt="thumbnail"/>
        </div>
        <div className="description-container">
            자바는 정말 아름다운 언어입니다. 자바는 멋진 언어입니다. 자바는 객체지향 언어입니다.
            자바를 사용하는것은 좋은 코드를 만들 수 있습니다.
        </div>
        <div className="interaction-container">
            <div className="icon-container">
                <i className="far fa-heart"></i>
                <span>120 likes</span>
            </div>
            <div className="icon-container">
                <i className="far fa-eye"></i>
                <span>1,200</span>
            </div>
           
        </div>
    </div>
    );
}