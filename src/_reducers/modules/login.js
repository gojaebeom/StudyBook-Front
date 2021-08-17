const loginState = {
    isLoggedIn: false,
    userId: "",
    profile: "",
};

export default function login(state=loginState, action){
    switch( action.type ) {
        case "IS_LOGGED_IN" :
            return {...action.payload, isLoggedIn: true};
        case "IS_LOGGED_OUT" :
            return {...state, isLoggedIn: false};
        default :
            return state;
    }
}