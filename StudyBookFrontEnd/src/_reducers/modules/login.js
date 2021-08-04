const loginState = {

};

export default function login(state=false, action){
    switch( action.type ) {
        case "IS_LOGGED_IN" :
            return true;
        case "IS_LOGGED_OUT" :
            return false;
        case "IS_LOGGED_OUT" :
            return false;
        default :
            return state;
    }
}