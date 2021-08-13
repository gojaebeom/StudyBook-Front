const postDetailState = {
    id:1,
    title:"",
    user:{
        nickname:"",
        profile:""
    },
    publishedAt:"",
    content:"",
    reviews:[

    ]
}

export default function postDetailReducer(state=postDetailState, action){
    switch( action.type ) {
        case "SET_POST_DETAIL" :
            return action.payload;
        default :
            return state;
    }
}