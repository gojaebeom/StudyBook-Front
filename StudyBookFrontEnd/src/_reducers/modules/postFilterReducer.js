const postFilterState = {
  sort:"POPULAR"
};

export default function postFilterReducer(state=postFilterState, action){
  switch( action.type ) {
    case "CHANGE_FILTER" :
        return action.payload;
    default : 
        return state;
  }
}