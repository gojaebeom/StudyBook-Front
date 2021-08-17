import React from "react";
import {useSelector} from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import PostDetailItem from "../PostDetailItem";

export default function PostDetail() {
    return (
        <DefaultLayout
            main={
                <PostDetailItem />
            }
        />
    );
}