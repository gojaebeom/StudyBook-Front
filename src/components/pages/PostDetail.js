import React from "react";
import usePost from "../../hooks/usePost";
import Header from "../Header";
import PostDetailItem from "../PostDetailItem";

export default function PostDetail(){

  const [post, setPost] = usePost();

  return(
  <React.Fragment>
    <Header isCanBack/>
    <PostDetailItem
      item={post}
      />
  </React.Fragment>
  );
}