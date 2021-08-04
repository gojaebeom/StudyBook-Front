import React from "react";
import {useSelector} from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import PostDetailItem from "../PostDetailItem";

export default function PostDetail() {
    const postDetailState = useSelector(state => state.postDetail);

    return (
        <DefaultLayout
            main={
                <PostDetailItem
                    item={postDetailState}
                />
            }
        />
    );
}