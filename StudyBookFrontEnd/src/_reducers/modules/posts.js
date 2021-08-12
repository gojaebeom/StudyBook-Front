import CoverImg from "../../images/cover.jpg";

const postsState = {
    total: 0,
    sortType: "",
    posts: [
        {
            id:1,
            user: {
                profile:CoverImg,
                nickname:"",
            },
            title:"",
            publishedAt:"",
            content:"",
            tags:[]
        },
    ]
}

export default function posts(state=postsState, action){
    const payload = action.payload;
    switch( action.type ) {
        case "INIT_POSTS" :
            return {...postsState,  posts: payload.posts, total: payload.total};
        default :
            return state;
    }
}