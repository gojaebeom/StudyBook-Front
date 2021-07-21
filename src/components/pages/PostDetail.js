import React from "react";
import usePost from "../../hooks/usePost";
import PostDetailItem from "../PostDetailItem";

export default function PostDetail(){

  const [post, setPost] = usePost();

  return(
  <React.Fragment>
    <PostDetailItem
      item={post}
    />
  </React.Fragment>
  );
}