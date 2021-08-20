const initialState = {
    isLoggedIn: false,
    userId: "",
    profile: "",
};

const login = (state=initialState, action) => {
    switch( action.type ) {
        case "IS_LOGGED_IN" :
            return {...action.payload, isLoggedIn: true};
        case "IS_LOGGED_OUT" :
            return {...state, isLoggedIn: false};
        case "REFRESH_PROFILE" :
            return {...state, profile: action.payload};
        default :
            return state;
    }
}
export default login;