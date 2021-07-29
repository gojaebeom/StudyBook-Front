import React from "react";
import { useSelector } from "react-redux";
import PostDetailItem from "../PostDetailItem";

export default function PostDetail(){

  const postDetailState = useSelector(state => state.postDetailReducer);

  return(
  <React.Fragment>
    <PostDetailItem
      item={postDetailState}
    />
  </React.Fragment>
  );
}