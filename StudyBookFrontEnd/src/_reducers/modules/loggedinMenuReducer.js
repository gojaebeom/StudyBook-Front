export default function loggedinMenuReducer(state=false, action){
  switch( action.type ) {
    case "TOGGLE_LOGGEDIN_MENU" :
        return action.payload;
    case "CLOSE_LOGGEDIN_MENU" :
        return false;
    default : 
        return state;
  }
}