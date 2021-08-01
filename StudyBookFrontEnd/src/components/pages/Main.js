import PostFilter from "../PostFilter";
import PostListItem from "../PostListItem";

import PostList from "../PostList";
import React from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../layouts/DefaultLayout";
import TopTagList from "../TopTagList";


export default function Main(){

  const postsState = useSelector(state => state.postsReducer);

  return(
  <DefaultLayout
    border
    left={
      <PostFilter/>
    }
    main={
      <PostList>
      {
        postsState.posts.map( (item, index) => {
          if(index % 2 === 0)
          return <PostListItem
            key={item.id}
            item={item}
            qouteColor="group-hover:text-green-300 text-green-100"
            titleColor="from-green-400 to-blue-500"
            profileBorderColor="border-green-300"
          />
          else
          return <PostListItem
            key={item.id}
            item={item}
            qouteColor="group-hover:text-purple-300 text-purple-100"
            titleColor="from-purple-400 via-pink-500 to-red-500"
            profileBorderColor="border-purple-300"
          />
        })
      }
    </PostList>
    }
    right={
      <TopTagList/>
    }
  /> 
  );
}