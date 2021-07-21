import usePosts from "../../hooks/usePosts";
import PostFilter from "../PostFilter";
import PostListItem from "../PostListItem";

import PostList from "../PostList";
import React from "react";

export default function Main(){

  const [posts, setPosts] = usePosts();

  return(
  <React.Fragment>
    <br/>
    {/* <PostSearch/> */}
    <PostFilter/>
    <PostList>
      {
        posts.map( (item, index) => {
          if(index % 2 === 0)
          return <PostListItem
          key={item.id}
          item={item}
          qouteColor="group-hover:text-green-300 text-green-100"
          titleColor="from-green-400 to-blue-500"
          />
          else
          return <PostListItem
          key={item.id}
          item={item}
          qouteColor="group-hover:text-purple-300 text-purple-100"
          titleColor="from-purple-400 via-pink-500 to-red-500"
          />
        })
      }
    </PostList>
  </React.Fragment>
  );
}