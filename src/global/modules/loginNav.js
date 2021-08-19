const loginNav = (state=false, action) => {
    switch( action.type ) {
        case "TOGGLE_LOGIN_NAV" :
            return action.payload;
        case "CLOSE_LOGIN_NAV" :
            return false;
        default :
            return state;
    }
}
export default loginNav;