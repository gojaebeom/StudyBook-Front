import React from "react";

export default function Search() {

    return (
    <div className="search-container">
        <div className="icon-container">

        </div>
        <input placeholder="찾으시는 글이 있나요?"/>
        <div className="button-container">
            <button><i className="fas fa-search"></i></button>
        </div>
    </div>
    );
}