const loginState = {
    isLoggedIn: false,
    userId: "",
    profileImg: "",
};

export default function login(state=loginState, action){
    switch( action.type ) {
        case "IS_LOGGED_IN" :
            return action.payload;
        case "IS_LOGGED_OUT" :
            return {...state, isLoggedIn: false};
        default :
            return state;
    }
}