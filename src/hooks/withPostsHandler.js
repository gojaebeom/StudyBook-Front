import { useEffect, useState } from "react";
import { apiScaffold } from "../api";

const withPostsHandler = Posts => { 
    const Component = () => { 

        const [postState, setPostState] = useState({
            total: 0,
            page:2,
            sort: "recent", // recent | old | views
            keyword: "",
            posts: [
                {
                    id:1,
                    user: {
                        profilePreview:"",
                        nickname:"",
                    },
                    title:"",
                    publishedAt:"",
                    content:"",
                    views: 0,
                    tags:[]
                },
            ]
        });
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(async () => {
            const res = await apiScaffold({
                "METHOD": "GET",
                "URL":`/api/posts?page=${postState.page}&sort=${postState.sort}&keyword=${postState.keyword}`
            });
            setPostState({...postState, posts:res.posts});
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[postState.page, postState.sort, postState.keyword]);
    
        let timer;
        const searchHandler = (e) => {
            const value = e.target.value;
            if(timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(async () => {
                setPostState({...postState, keyword:value});
            }, 300);
        }
    
        const sortHandler = (e) => {
            const value = e.target.value;
            if(value === "recent") setPostState({...postState, sort: "recent"});
            else if(value === "old") setPostState({...postState, sort: "old"});
            else if(value === "views") setPostState({...postState, sort: "views"});
        }

        return (
        <Posts 
            posts={postState.posts} 
            sort={postState.sort}
            sortHandler={sortHandler}
            searchHandler={searchHandler}
        /> 
        );

    }; 
    return Component;
};
export default withPostsHandler;