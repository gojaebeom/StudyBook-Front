export default function postCreateModalReducer(state=false, action){
  switch( action.type ) {
    case "POST_CREATE_MODAL_TOGGLE" :
        return !state;
    default : 
        return state;
  }
}