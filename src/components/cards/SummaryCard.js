import React from "react";
import { Link } from "react-router-dom";
import ThumbnailImage from "../../assets/cover.png";

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
    </div>
    );
}