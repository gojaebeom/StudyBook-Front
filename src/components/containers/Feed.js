import React from "react";
import SummaryCard from "../widgets/cards/SummaryCard";
import Search from "../widgets/Search";

export default function Feed() {
    return (
    <div className="feed-container">
        <div className="left-container">
            <Search />
            <SummaryCard />
        </div>
        <div className="right-container">
            <div>오른쪽</div>
        </div>
    </div>
    );
}