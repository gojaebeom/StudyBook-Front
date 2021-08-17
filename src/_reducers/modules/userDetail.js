const userDetailState = {
    id:"",
    nickname:"",
    profile:"",
    posts:[]
}

export default function userDetailReducer(state=userDetailState, action){
    switch( action.type ) {
        case "SET_USER_DETAIL" :
            return action.payload;
        default :
            return state;
    }
}