const initialState = {
    isLoggedIn: false,
    userId: null,
    profile: null,
};

const login = (state=initialState, action) => {
    switch( action.type ) {
        case "IS_LOGGED_IN" :
            return {...action.payload, isLoggedIn: true};
        case "IS_LOGGED_OUT" :
            return {...state, isLoggedIn: false};
        default :
            return state;
    }
}
export default login;